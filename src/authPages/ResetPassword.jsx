import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../slices/user.slice';
import * as yup from 'yup'
import { CircleAlert, Eye, EyeOff } from 'lucide-react';
export default function ResetPassword() {
    const [isEyeVisible, setIsEyeVisible] = useState(false); // State to track visibility
    const toggleIcon = () => {
        setIsEyeVisible(!isEyeVisible); // Toggle the state
    };
    const isLoadingUser=useSelector(store=>store.userReducer.isLoadingUser)
    const dispatch = useDispatch()
    let validationSchema = yup.object({
        email:yup.string().required('Email is required.').email('Invalid email format.'),
        newPassword:yup.string().required('Password is required.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+[\]{};':"\\|,.<>\/?]{8,}$/,'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one digit, and one special character.'),
      })
    let formik = useFormik({
        initialValues:{
          email:'',
          newPassword:''
        },
        onSubmit:(values)=>{
            dispatch(resetPassword(values))
        },
        validationSchema:validationSchema
      })
  return (
    <>
          <div className="my-20 grid place-items-center">
        <svg
          width="100.14px"
          height={54}
          viewBox="0 0 205 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M109.428 41.8061C99.2188 49.308 84.4216 53.3105 71.6814 53.3105C53.8178 53.3105 37.7359 46.7235 25.5693 35.7678C24.6135 34.9064 25.4698 33.7323 26.6169 34.4032C39.747 42.0195 55.9818 46.6015 72.7521 46.6015C84.062 46.6015 96.504 44.2686 107.944 39.4273C109.672 38.6954 111.118 40.5557 109.428 41.8061Z"
            fill="#FF9900"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.675 36.9649C112.376 35.3029 105.05 36.1797 101.761 36.5685C100.76 36.6904 100.607 35.8213 101.509 35.1961C107.344 31.1021 116.918 32.2839 118.034 33.6562C119.151 35.036 117.744 44.6041 112.261 49.1708C111.42 49.8723 110.617 49.4987 110.991 48.5686C112.223 45.5037 114.983 38.6345 113.675 36.9649Z"
            fill="#FF9900"
          />
          <path
            d="M181.907 30.7799C180.8 30.7799 180.246 30.3011 180.246 29.3435V28.8929C180.246 27.9353 180.8 27.4565 181.907 27.4565C183.015 27.4565 183.569 27.9353 183.569 28.8929V29.3435C183.569 30.3011 183.015 30.7799 181.907 30.7799ZM188.612 12.3885C187.729 12.3885 187.288 12.0036 187.288 11.2338V10.7832C187.288 10.0133 187.729 9.62842 188.612 9.62842C189.494 9.62842 189.936 10.0133 189.936 10.7832V11.2338C189.936 12.0036 189.494 12.3885 188.612 12.3885ZM187.542 15.9091H189.682V30.4419H187.542V15.9091ZM193.95 30.4419V15.9091H196.091V18.2749H196.372C196.654 17.3736 197.086 16.6977 197.668 16.247C198.269 15.7964 199.076 15.5711 200.09 15.5711C201.386 15.5711 202.399 16.0123 203.132 16.8948C203.883 17.7773 204.258 19.1386 204.258 20.9787V30.4419H202.118V21.1195C202.118 19.9554 201.874 19.0635 201.386 18.4439C200.916 17.8243 200.184 17.5144 199.189 17.5144C198.325 17.5144 197.593 17.7773 196.992 18.303C196.391 18.8288 196.091 19.5704 196.091 20.528V30.4419H193.95Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.999 6.29549V2.3161C101.999 1.7138 102.457 1.30981 103.008 1.30981H120.879C121.453 1.30981 121.911 1.72148 121.911 2.3161V5.72373C121.904 6.29549 121.422 7.04268 120.566 8.22425L111.305 21.4052C114.746 21.3213 118.379 21.8321 121.498 23.5854C122.202 23.9819 122.393 24.5613 122.447 25.1331V29.3794C122.447 29.9586 121.804 30.6372 121.131 30.2865C115.633 27.4124 108.33 27.0999 102.251 30.317C101.631 30.6524 100.981 29.9815 100.981 29.4022V25.3694C100.981 24.7214 100.989 23.616 101.639 22.6325L112.368 7.29425H103.031C102.457 7.29425 101.999 6.89011 101.999 6.29549Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.792 31.1253H31.355C30.8349 31.0871 30.422 30.6983 30.3838 30.2029V2.38487C30.3838 1.82847 30.8503 1.38626 31.4314 1.38626H36.5015C37.0291 1.40913 37.4496 1.81312 37.4879 2.31626V5.95276H37.5874C38.9103 2.43828 41.3956 0.799316 44.745 0.799316C48.1479 0.799316 50.2737 2.43828 51.8032 5.95276C53.1184 2.43828 56.1084 0.799316 59.3126 0.799316C61.5914 0.799316 64.0843 1.73699 65.6061 3.84103C67.3267 6.18146 66.9748 9.58142 66.9748 12.5622L66.9673 30.119C66.9673 30.6754 66.5008 31.1253 65.9196 31.1253H60.4903C59.9472 31.0871 59.5113 30.6526 59.5113 30.119V15.3752C59.5113 14.2013 59.6185 11.2738 59.3585 10.1608C58.9532 8.29318 57.7374 7.76701 56.162 7.76701C54.8466 7.76701 53.4702 8.64375 52.9121 10.0465C52.3538 11.4492 52.4072 13.7972 52.4072 15.3752V30.119C52.4072 30.6754 51.9409 31.1253 51.3596 31.1253H45.9302C45.3796 31.0871 44.9514 30.6526 44.9514 30.119L44.9437 15.3752C44.9437 12.2726 45.4561 7.70607 41.5943 7.70607C37.6867 7.70607 37.8397 12.1582 37.8397 15.3752V30.119C37.8397 30.6754 37.3732 31.1253 36.792 31.1253Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M137.287 0.799316C145.355 0.799316 149.721 7.70607 149.721 16.4883C149.721 24.9731 144.896 31.7046 137.287 31.7046C129.365 31.7046 125.052 24.7978 125.052 16.191C125.052 7.53079 129.418 0.799316 137.287 0.799316ZM137.333 6.47877C133.326 6.47877 133.074 11.9218 133.074 15.3143C133.074 18.7142 133.02 25.9719 137.287 25.9719C141.501 25.9719 141.699 20.117 141.699 16.5493C141.699 14.2013 141.6 11.3958 140.889 9.16975C140.277 7.23348 139.061 6.47877 137.333 6.47877Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M160.171 31.1253H154.757C154.214 31.0871 153.778 30.6526 153.778 30.119L153.771 2.29339C153.816 1.78273 154.268 1.38626 154.818 1.38626H159.858C160.332 1.40913 160.722 1.72931 160.829 2.16384V6.41767H160.928C162.449 2.61357 164.583 0.799316 168.338 0.799316C170.777 0.799316 173.156 1.6759 174.685 4.07741C176.108 6.30332 176.108 10.0465 176.108 12.7375V30.2486C176.047 30.7365 175.594 31.1253 175.06 31.1253H169.607C169.11 31.0871 168.698 30.7212 168.645 30.2486V15.139C168.645 12.0971 168.996 7.64514 165.24 7.64514C163.919 7.64514 162.703 8.5294 162.098 9.87121C161.334 11.5711 161.235 13.2637 161.235 15.139V30.119C161.227 30.6754 160.752 31.1253 160.171 31.1253Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M87.7343 17.8373C87.7343 19.949 87.7879 21.71 86.7174 23.5855C85.8532 25.1102 84.4767 26.0478 82.9549 26.0478C80.8673 26.0478 79.6437 24.4621 79.6437 22.1217C79.6437 17.502 83.7962 16.6634 87.7343 16.6634V17.8373ZM93.2174 31.0489C92.8578 31.369 92.3379 31.3919 91.9327 31.1784C90.1279 29.6842 89.799 28.9905 88.8125 27.5649C85.8302 30.599 83.712 31.5063 79.8502 31.5063C75.2697 31.5063 71.7139 28.6932 71.7139 23.0595C71.7139 18.6608 74.0997 15.6647 77.5102 14.201C80.4621 12.9051 84.5837 12.6764 87.7343 12.318V11.6167C87.7343 10.3283 87.8338 8.80366 87.069 7.69071C86.4114 6.69194 85.142 6.28028 84.0179 6.28028C81.9455 6.28028 80.1027 7.33998 79.6514 9.5355C79.5597 10.0235 79.2003 10.5037 78.7031 10.5266L73.4344 9.96236C72.9909 9.86336 72.4939 9.50496 72.6238 8.82653C73.832 2.45331 79.6132 0.532227 84.7826 0.532227C87.4285 0.532227 90.8849 1.23352 92.9725 3.23089C95.6184 5.69334 95.3661 8.97895 95.3661 12.5543V21.0011C95.3661 23.5398 96.4214 24.6528 97.4155 26.025C97.7596 26.5129 97.8362 27.0999 97.3926 27.4658C96.2837 28.3883 94.3108 30.1035 93.2249 31.064L93.2174 31.0489Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.461 17.8373C16.461 19.949 16.5145 21.71 15.4439 23.5854C14.5798 25.1102 13.211 26.0478 11.6816 26.0478C9.59393 26.0478 8.37806 24.4621 8.37806 22.1217C8.37806 17.502 12.5304 16.6634 16.461 16.6634V17.8373ZM21.9439 31.0489C21.5846 31.369 21.0645 31.3919 20.6592 31.1784C18.8544 29.6842 18.5333 28.9904 17.5393 27.5649C14.5569 30.599 12.4463 31.5063 8.57687 31.5063C4.00395 31.5063 0.44043 28.6931 0.44043 23.0594C0.44043 18.6607 2.83395 15.6647 6.23689 14.201C9.18864 12.9051 13.3104 12.6764 16.461 12.318V11.6167C16.461 10.3283 16.5603 8.80366 15.8033 7.69055C15.138 6.69194 13.8686 6.28028 12.7522 6.28028C10.6798 6.28028 8.82922 7.33998 8.37806 9.5355C8.2863 10.0235 7.92688 10.5037 7.43747 10.5266L2.16101 9.96236C1.71749 9.86336 1.22807 9.50496 1.35043 8.82653C2.56631 2.45331 8.33981 0.532227 13.5092 0.532227C16.1551 0.532227 19.6115 1.23352 21.6993 3.23089C24.345 5.69334 24.0927 8.97895 24.0927 12.5543V21.0011C24.0927 23.5396 25.1481 24.6528 26.1421 26.025C26.4939 26.5129 26.5704 27.0999 26.1269 27.4658C25.018 28.3883 23.0451 30.1035 21.9591 31.064L21.9439 31.0489Z"
            fill="black"
          />
        </svg>

        <div className="max-w-[587px] max-h-[579px]  border rounded-xl py-[51px] px-[37px] space-y-4">
          <h2 className="text-3xl font-medium ">New Password</h2>
          <form
            className="w-full text-left space-y-3"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="email" className="text-xl font-semibold">
                Your email
              </label>
              <input
                type="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                className="w-full p-2.5 border rounded-[7px] border-black"
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-600 flex gap-1 items-center">
                  <CircleAlert color="red" size={20} className="" />
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="relative">
              <label htmlFor="newPassword" className="text-xl font-semibold">
                New Password
              </label>
              <input
                autoComplete="true"
                type={isEyeVisible ? "text" : "password"}
                name="newPassword"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.newPassword}
                id="newPassword"
                className="w-full p-2.5 border rounded-[7px] border-black"
              />
              {formik.errors.newPassword && formik.touched.newPassword ? (
                <p className="text-red-600 flex gap-1 items-center">
                  <CircleAlert color="red" size={20} className="" />
                  {formik.errors.newPassword}
                </p>
              ) : null}
              <span
                onClick={toggleIcon}
                className="absolute top-[38px] right-3 cursor-pointer"
              >
                {isEyeVisible ? <Eye /> : <EyeOff />}
              </span>
            </div>
            <button
              disabled={isLoadingUser}
              type="submit"
              className="w-full bg-[#FFD814] py-[9px] px-[70.1px] rounded-[10px] font-normal text-xl active:scale-90 transition-all duration-200"
            >
              Reset Password
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon’s{" "}
            <a
              href="/"
              className="text-[#2A8FD7] font-inika border-b border-[#2A8FD7]"
            >
              {" "}
              Conditions of Use
            </a>{" "}
            <br /> and{" "}
            <a
              href="/"
              className="text-[#2A8FD7] border-b font-inika border-[#2A8FD7]"
            >
              Privacy Notice.
            </a>
          </p>
          <svg
            width="372.672"
            height={2}
            viewBox="0 0 489 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.656738" width={488} height={1} fill="#D9D9D9" />
          </svg>
          <div>
            <h3 className="font-semibold text-xl">Buying for work?</h3>
            <a
              href="/"
              className="font-normal text-lg font-inika text-[#2A8FD7]"
            >
              Shop on Amazon Business
            </a>
          </div>
        </div>
        <p className=" font-normal text-base text-[#717171] relative text-center my-5 before:w-[150px] before:block before:absolute before:align-middle before:ml-3 before:left-full before:top-1/2  before:h-[1px] before:bg-[#D9D9D9] before:content-[''] after:w-[150px] after:block after:absolute after:align-middle after:mr-3 after:right-full after:top-1/2  after:h-[1px] after:bg-[#D9D9D9] after:content-['']">
          New to Amazon?
        </p>
        <div className="mt-10 w-full space-y-5">
          <svg
            width="100%"
            height="4"
            viewBox="0 0 1400 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H1400L698.372 4L0 0Z" fill="#D9D9D9" />
          </svg>
          <ul className="flex gap-[34.03px] justify-center">
            <li><a href="/" className="text-[#2A8FD7] font-inika font-normal">Conditions of Use</a></li>
            <li><a href="/" className="text-[#2A8FD7] font-inika font-normal">Privacy Notice</a></li>
            <li><a href="/" className="text-[#2A8FD7] font-inika font-normal">Help</a></li>
          </ul>
          <p className="font-light text-xl text-center">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>

    </>
  )
}
