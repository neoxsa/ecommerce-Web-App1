import LogoutBtn from "../components/Logout Btn/LogoutBtn";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import authService from "../appwrite/auth";
import { logIn, logOut } from "../features/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import spinner from "../assets/spinner.gif"
import { ToastContainer, toast } from "react-toastify";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string(),
  currentPassword: yup.string(),
  birthday: yup.string(),
  address: yup.string(),
  city: yup.string(),
  state: yup.string(),
  postalCode: yup.string(),
  country: yup.string(),
});

function Profile() {

  // const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = () => toast("Profile updated successfully!", { type: "success" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      birthday: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();

        if (currentUser) {
          setUser(currentUser);
          dispatch(logIn(currentUser));
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.log("Failed to fetch user:", error);
        dispatch(logOut());
        navigate('/login');
      } finally {
        setLoading(false);

      }
    };

    fetchUser();
  }, [dispatch, navigate]);

  // Reset form with user data
  useEffect(() => {
    if (user) {
      reset({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        birthday: user?.prefs?.birthday || "",
        address: user?.prefs?.address || "",
        city: user?.prefs?.city || "",
        state: user?.prefs?.state || "",
        postalCode: user?.prefs?.postalCode || "",
        country: user?.prefs?.country || "",
      });
    }
  }, [user, reset]);

  const watchEmail = watch("email");
  const watchPhone = watch("phone");

  const dataChange = watchEmail !== user?.email || watchPhone !== user?.phone;

  const onSubmit = async (data) => {
    try {
      const updatedUser = await authService.updateUserProfile({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.currentPassword,
        prefs: {
          birthday: data.birthday,
          address: data.address,
          city: data.city,
          state: data.state,
          postalCode: data.postalCode,
          country: data.country,
        },

      });

      { updatedUser && notify(); }

      setUser(updatedUser);
      dispatch(logIn(updatedUser));

      // reset form with updated data instead of page reload
      reset({
        name: updatedUser?.name,
        email: updatedUser?.email,
        phone: updatedUser?.phone,
        currentPassword: "",
        birthday: updatedUser?.prefs?.birthday || "",
        address: updatedUser?.prefs?.address || "",
        city: updatedUser?.prefs?.city || "",
        state: updatedUser?.prefs?.state || "",
        postalCode: updatedUser?.prefs?.postalCode || "",
        country: updatedUser?.prefs?.country || "",
      });

    } catch (error) {
      console.log("Update failed:", error);
      alert("Failed to update profile");
    }
  };

  // console.log("current user", user);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">
          <img className="w-40 h-40 " src={spinner} alt="loading" />
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <ToastContainer
        role="status"
        position="top-center"
        hideProgressBar={true}
        autoClose={1000}
        pauseOnHover={false}
        theme="colored"
        toastStyle={{
          backgroundColor: "#FFF8E1",
          color: "teal",
          border: "1px solid teal",
        }}
        closeButton={false}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto px-4 py-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 p-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl md:text-2xl font-semibold">
              {user?.name?.[0]}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Your Profile</h1>
              <p className=" text-gray-500">
                Manage your account information and preferences
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <LogoutBtn
              type="button"
              className="cursor-pointer"
              buttonText="Sign out" />

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Account Details */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Account details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Birthday
                </label>
                <input
                  {...register("birthday")}
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              {dataChange && (
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password (For email or phone changes){" "}
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("currentPassword")}
                    type="password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.password.message}
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold mb-3">Address</h3>

              <div className=" col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    {...register("address")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    {...register("city")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    {...register("state")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    {...register("country")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    {...register("postalCode")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center sm:justify-end">
                  <button
                    type="submit"
                    className=" mt-5 px-5 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 text-lg cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold mb-4">Recent orders</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order #1024</p>
                    <p className="text-sm text-gray-500">2 items • $78.50</p>
                  </div>
                  <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 text-sm"
                  >
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order #1023</p>
                    <p className="text-sm text-gray-500">1 item • $24.00</p>
                  </div>
                  <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 text-sm"
                  >
                    View
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Order #1022</p>
                    <p className="text-sm text-gray-500">3 items • $142.99</p>
                  </div>
                  <button
                    type="button"
                    className="text-teal-600 hover:text-teal-700 text-sm"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </form>
    </>
  );
}

export default Profile;
