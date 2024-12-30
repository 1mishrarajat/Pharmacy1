// 'use client';
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Helmet, HelmetProvider } from "react-helmet-async";

// export default function Register() {
//   const [ipaddress, setipaddress] = useState('');
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     username: "",
//     phone: "",
//     country: "India",
//     address: "",
//     city: "",
//     state: "",
//     password: "",
//     institute: "",
//     ip_address: "",
//     pin: "",
//   });

//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   useEffect(() => {
//     fetchIP();
//   }, []);
  
//   const fetchIP = async () => {
//     try {
//       const response = await fetch('https://api.ipify.org?format=json');
//       const data = await response.text();
//       setFormData((prevData) => ({
//         ...prevData,
//         ip_address: data, // Set the IP address in form data
//       }));
//     } catch (error) {
//       console.error('Failed to fetch IP:', error);
//     }
//   };
  
//   const validateForm = () => {
//     const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

//     if (!ipRegex.test(formData.ip_address)) {
//       toast.error("Invalid IP address format.");
//       return false;
//     }

//     for (const [key, value] of Object.entries(formData)) {
//       if (!value) {
//         toast.error(`${key.replace(/_/g, " ").toUpperCase()} is required.`);
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form Data Submitted:", formData);
//       try {
//         const response = await fetch('https://dir.mripub.com/api/Regristration.php', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           localStorage.setItem("username", formData.username);
//           localStorage.setItem("institute", formData.institute);
//           toast.success("Registration successful!");
//           router.push("/subscription");
//         } else {
//           toast.error("Failed to register. Please try again.");
//         }
//       } catch (error) {
//         toast.error("An error occurred while registering. Please try again.");
//       }
//     }
//   };

//   return (
//     <HelmetProvider>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Register</title>
//       </Helmet>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/bg-10.png')] bg-no-repeat bg-coverz bg-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
//           <div className="flex justify-center mb-4">
//             <img
//               src="./Pharmanetlogo.png"
//               alt="Logo"
//               className="w-32 object-contain"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Now</h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {["first_name", "last_name", "username", "password", "institute", "phone", "state", "city", "pin", "address"].map((field, idx) => (
//               <div key={idx}>
//                 <label htmlFor={field} className="block text-sm font-medium text-gray-700">
//                   {field.replace(/_/g, " ").toUpperCase()}
//                 </label>
//                 <input
//                   id={field}
//                   name={field}
//                   type={field === "password" ? "password" : "text"}
//                   placeholder={`Enter your ${field.replace(/_/g, " ")}`}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
//                   required
//                 />
//               </div>
//             ))}
//             <div>
//               <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//               >
            // <option value="Afghanistan">Afghanistan</option>
            //     <option value="Åland Islands">Åland Islands</option>
            //     <option value="Albania">Albania</option>
            //     <option value="Algeria">Algeria</option>
            //     <option value="American Samoa">American Samoa</option>
            //     <option value="Andorra">Andorra</option>
            //     <option value="Angola">Angola</option>
            //     <option value="Anguilla">Anguilla</option>
            //     <option value="Antarctica">Antarctica</option>
            //     <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            //     <option value="Argentina">Argentina</option>
            //     <option value="Armenia">Armenia</option>
            //     <option value="Aruba">Aruba</option>
            //     <option value="Australia">Australia</option>
            //     <option value="Austria">Austria</option>
            //     <option value="Azerbaijan">Azerbaijan</option>
            //     <option value="Bahamas">Bahamas</option>
            //     <option value="Bahrain">Bahrain</option>
            //     <option value="Bangladesh">Bangladesh</option>
            //     <option value="Barbados">Barbados</option>
            //     <option value="Belarus">Belarus</option>
            //     <option value="Belgium">Belgium</option>
            //     <option value="Belize">Belize</option>
            //     <option value="Benin">Benin</option>
            //     <option value="Bermuda">Bermuda</option>
            //     <option value="Bhutan">Bhutan</option>
            //     <option value="Bolivia">Bolivia</option>
            //     <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            //     <option value="Botswana">Botswana</option>
            //     <option value="Bouvet Island">Bouvet Island</option>
            //     <option value="Brazil">Brazil</option>
            //     <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
            //     <option value="Brunei Darussalam">Brunei Darussalam</option>
            //     <option value="Bulgaria">Bulgaria</option>
            //     <option value="Burkina Faso">Burkina Faso</option>
            //     <option value="Burundi">Burundi</option>
            //     <option value="Cambodia">Cambodia</option>
            //     <option value="Cameroon">Cameroon</option>
            //     <option value="Canada">Canada</option>
            //     <option value="Cape Verde">Cape Verde</option>
            //     <option value="Cayman Islands">Cayman Islands</option>
            //     <option value="Central African Republic">Central African Republic</option>
            //     <option value="Chad">Chad</option>
            //     <option value="Chile">Chile</option>
            //     <option value="China">China</option>
            //     <option value="Christmas Island">Christmas Island</option>
            //     <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
            //     <option value="Colombia">Colombia</option>
            //     <option value="Comoros">Comoros</option>
            //     <option value="Congo">Congo</option>
            //     <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
            //     <option value="Cook Islands">Cook Islands</option>
            //     <option value="Costa Rica">Costa Rica</option>
            //     <option value="Cote D'ivoire">Cote D'ivoire</option>
            //     <option value="Croatia">Croatia</option>
            //     <option value="Cuba">Cuba</option>
            //     <option value="Cyprus">Cyprus</option>
            //     <option value="Czech Republic">Czech Republic</option>
            //     <option value="Denmark">Denmark</option>
            //     <option value="Djibouti">Djibouti</option>
            //     <option value="Dominica">Dominica</option>
            //     <option value="Dominican Republic">Dominican Republic</option>
            //     <option value="Ecuador">Ecuador</option>
            //     <option value="Egypt">Egypt</option>
            //     <option value="El Salvador">El Salvador</option>
            //     <option value="Equatorial Guinea">Equatorial Guinea</option>
            //     <option value="Eritrea">Eritrea</option>
            //     <option value="Estonia">Estonia</option>
            //     <option value="Ethiopia">Ethiopia</option>
            //     <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
            //     <option value="Faroe Islands">Faroe Islands</option>
            //     <option value="Fiji">Fiji</option>
            //     <option value="Finland">Finland</option>
            //     <option value="France">France</option>
            //     <option value="French Guiana">French Guiana</option>
            //     <option value="French Polynesia">French Polynesia</option>
            //     <option value="French Southern Territories">French Southern Territories</option>
            //     <option value="Gabon">Gabon</option>
            //     <option value="Gambia">Gambia</option>
            //     <option value="Georgia">Georgia</option>
            //     <option value="Germany">Germany</option>
            //     <option value="Ghana">Ghana</option>
            //     <option value="Gibraltar">Gibraltar</option>
            //     <option value="Greece">Greece</option>
            //     <option value="Greenland">Greenland</option>
            //     <option value="Grenada">Grenada</option>
            //     <option value="Guadeloupe">Guadeloupe</option>
            //     <option value="Guam">Guam</option>
            //     <option value="Guatemala">Guatemala</option>
            //     <option value="Guernsey">Guernsey</option>
            //     <option value="Guinea">Guinea</option>
            //     <option value="Guinea-bissau">Guinea-bissau</option>
            //     <option value="Guyana">Guyana</option>
            //     <option value="Haiti">Haiti</option>
            //     <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
            //     <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
            //     <option value="Honduras">Honduras</option>
            //     <option value="Hong Kong">Hong Kong</option>
            //     <option value="Hungary">Hungary</option>
            //     <option value="Iceland">Iceland</option>
            //     <option value="India">India</option>
            //     <option value="Indonesia">Indonesia</option>
            //     <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
            //     <option value="Iraq">Iraq</option>
            //     <option value="Ireland">Ireland</option>
            //     <option value="Isle of Man">Isle of Man</option>
            //     <option value="Israel">Israel</option>
            //     <option value="Italy">Italy</option>
            //     <option value="Jamaica">Jamaica</option>
            //     <option value="Japan">Japan</option>
            //     <option value="Jersey">Jersey</option>
            //     <option value="Jordan">Jordan</option>
            //     <option value="Kazakhstan">Kazakhstan</option>
            //     <option value="Kenya">Kenya</option>
            //     <option value="Kiribati">Kiribati</option>
            //     <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
            //     <option value="Korea, Republic of">Korea, Republic of</option>
            //     <option value="Kuwait">Kuwait</option>
            //     <option value="Kyrgyzstan">Kyrgyzstan</option>
            //     <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
            //     <option value="Latvia">Latvia</option>
            //     <option value="Lebanon">Lebanon</option>
            //     <option value="Lesotho">Lesotho</option>
            //     <option value="Liberia">Liberia</option>
            //     <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
            //     <option value="Liechtenstein">Liechtenstein</option>
            //     <option value="Lithuania">Lithuania</option>
            //     <option value="Luxembourg">Luxembourg</option>
            //     <option value="Macao">Macao</option>
            //     <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
            //     <option value="Madagascar">Madagascar</option>
            //     <option value="Malawi">Malawi</option>
            //     <option value="Malaysia">Malaysia</option>
            //     <option value="Maldives">Maldives</option>
            //     <option value="Mali">Mali</option>
            //     <option value="Malta">Malta</option>
            //     <option value="Marshall Islands">Marshall Islands</option>
            //     <option value="Martinique">Martinique</option>
            //     <option value="Mauritania">Mauritania</option>
            //     <option value="Mauritius">Mauritius</option>
            //     <option value="Mayotte">Mayotte</option>
            //     <option value="Mexico">Mexico</option>
            //     <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
            //     <option value="Moldova, Republic of">Moldova, Republic of</option>
            //     <option value="Monaco">Monaco</option>
            //     <option value="Mongolia">Mongolia</option>
            //     <option value="Montenegro">Montenegro</option>
            //     <option value="Montserrat">Montserrat</option>
            //     <option value="Morocco">Morocco</option>
            //     <option value="Mozambique">Mozambique</option>
            //     <option value="Myanmar">Myanmar</option>
            //     <option value="Namibia">Namibia</option>
            //     <option value="Nauru">Nauru</option>
            //     <option value="Nepal">Nepal</option>
            //     <option value="Netherlands">Netherlands</option>
            //     <option value="Netherlands Antilles">Netherlands Antilles</option>
            //     <option value="New Caledonia">New Caledonia</option>
            //     <option value="New Zealand">New Zealand</option>
            //     <option value="Nicaragua">Nicaragua</option>
            //     <option value="Niger">Niger</option>
            //     <option value="Nigeria">Nigeria</option>
            //     <option value="Niue">Niue</option>
            //     <option value="Norfolk Island">Norfolk Island</option>
            //     <option value="Northern Mariana Islands">Northern Mariana Islands</option>
            //     <option value="Norway">Norway</option>
            //     <option value="Oman">Oman</option>
            //     <option value="Pakistan">Pakistan</option>
            //     <option value="Palau">Palau</option>
            //     <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
            //     <option value="Panama">Panama</option>
            //     <option value="Papua New Guinea">Papua New Guinea</option>
            //     <option value="Paraguay">Paraguay</option>
            //     <option value="Peru">Peru</option>
            //     <option value="Philippines">Philippines</option>
            //     <option value="Pitcairn">Pitcairn</option>
            //     <option value="Poland">Poland</option>
            //     <option value="Portugal">Portugal</option>
            //     <option value="Puerto Rico">Puerto Rico</option>
            //     <option value="Qatar">Qatar</option>
            //     <option value="Reunion">Reunion</option>
            //     <option value="Romania">Romania</option>
            //     <option value="Russian Federation">Russian Federation</option>
            //     <option value="Rwanda">Rwanda</option>
            //     <option value="Saint Helena">Saint Helena</option>
            //     <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            //     <option value="Saint Lucia">Saint Lucia</option>
            //     <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
            //     <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
            //     <option value="Samoa">Samoa</option>
            //     <option value="San Marino">San Marino</option>
            //     <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            //     <option value="Saudi Arabia">Saudi Arabia</option>
            //     <option value="Senegal">Senegal</option>
            //     <option value="Serbia">Serbia</option>
            //     <option value="Seychelles">Seychelles</option>
            //     <option value="Sierra Leone">Sierra Leone</option>
            //     <option value="Singapore">Singapore</option>
            //     <option value="Slovakia">Slovakia</option>
            //     <option value="Slovenia">Slovenia</option>
            //     <option value="Solomon Islands">Solomon Islands</option>
            //     <option value="Somalia">Somalia</option>
            //     <option value="South Africa">South Africa</option>
            //     <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
            //     <option value="Spain">Spain</option>
            //     <option value="Sri Lanka">Sri Lanka</option>
            //     <option value="Sudan">Sudan</option>
            //     <option value="Suriname">Suriname</option>
            //     <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
            //     <option value="Swaziland">Swaziland</option>
            //     <option value="Sweden">Sweden</option>
            //     <option value="Switzerland">Switzerland</option>
            //     <option value="Syrian Arab Republic">Syrian Arab Republic</option>
            //     <option value="Taiwan">Taiwan</option>
            //     <option value="Tajikistan">Tajikistan</option>
            //     <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
            //     <option value="Thailand">Thailand</option>
            //     <option value="Timor-leste">Timor-leste</option>
            //     <option value="Togo">Togo</option>
            //     <option value="Tokelau">Tokelau</option>
            //     <option value="Tonga">Tonga</option>
            //     <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            //     <option value="Tunisia">Tunisia</option>
            //     <option value="Turkey">Turkey</option>
            //     <option value="Turkmenistan">Turkmenistan</option>
            //     <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
            //     <option value="Tuvalu">Tuvalu</option>
            //     <option value="Uganda">Uganda</option>
            //     <option value="Ukraine">Ukraine</option>
            //     <option value="United Arab Emirates">United Arab Emirates</option>
            //     <option value="United Kingdom">United Kingdom</option>
            //     <option value="United States">United States</option>
            //     <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
            //     <option value="Uruguay">Uruguay</option>
            //     <option value="Uzbekistan">Uzbekistan</option>
            //     <option value="Vanuatu">Vanuatu</option>
            //     <option value="Venezuela">Venezuela</option>
            //     <option value="Viet Nam">Viet Nam</option>
            //     <option value="Virgin Islands, British">Virgin Islands, British</option>
            //     <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
            //     <option value="Wallis and Futuna">Wallis and Futuna</option>
            //     <option value="Western Sahara">Western Sahara</option>
            //     <option value="Yemen">Yemen</option>
            //     <option value="Zambia">Zambia</option>
            //     <option value="Zimbabwe">Zimbabwe</option>
//               </select>
//             </div>
//             <div>
//   <label htmlFor="ip_address" className="block text-sm font-medium text-gray-700">
//     IP ADDRESS
//   </label>
//   <input
//     id="ip_address"
//     name="ip_address"
//     type="text"
//     value={formData.ip_address}
//     disabled
//     className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
//   />
// </div>
//             <div className="md:col-span-2">
//               <button
//                 type="submit"
//                 className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm"
//               >
//                 Register Now
//               </button>
//             </div>
//           </form>
//           <p className="text-sm text-gray-500 text-center mt-4">
//             Already have an account?{" "}
//             <a href="/Login" className="text-blue-500 hover:underline">Log in</a>
//           </p>
//         </div>
//       </div>
//       <ToastContainer />
//     </HelmetProvider>
//   );
// }
'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register() {
  const [ipaddress, setIpAddress] = useState('');  // State for IP address
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    password: "",
    institute: "",
    ip_address: "",
    pin: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    fetchIP();
  }, []);
  
  const fetchIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      
      // Ensure IP is returned as a valid string
      if (data && data.ip) {
        const ip = data.ip;
        setIpAddress(ip);  // Set the IP address to state
        setFormData((prevData) => ({
          ...prevData,
          ip_address: ip,  // Set the IP address in form data as well
        }));
      }
    } catch (error) {
      console.error('Failed to fetch IP:', error);
    }
  };
  

  const validateForm = () => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (!ipRegex.test(formData.ip_address)) {
      toast.error("Invalid IP address format.");
      return false;
    }

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.error(`${key.replace(/_/g, " ").toUpperCase()} is required.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      try {
        const response = await fetch('https://dir.mripub.com/api/Regristration.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          localStorage.setItem("username", formData.username);
          localStorage.setItem("institute", formData.institute);
          toast.success("Registration successful!");
          router.push("/subscription");
        } else {
          toast.error("Failed to register. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred while registering. Please try again.");
      }
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/bg-10.png')] bg-no-repeat bg-coverz bg-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex justify-center mb-4">
            <img
              src="./Pharmanetlogo.png"
              alt="Logo"
              className="w-32 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Now</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["first_name", "last_name", "username", "password", "institute", "phone", "state", "city", "pin", "address"].map((field, idx) => (
              <div key={idx}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {field.replace(/_/g, " ").toUpperCase()}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  placeholder={`Enter your ${field.replace(/_/g, " ")}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="India">India</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div>
              <label htmlFor="ip_address" className="block text-sm font-medium text-gray-700">
                IP ADDRESS
              </label>
              <input
                id="ip_address"
                name="ip_address"
                type="text"
                value={ipaddress}  // Display the fetched IP
                disabled
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none text-sm"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
              >
                Register
              </button>
            </div>
          </form>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-500 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
}
