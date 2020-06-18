// import RNFetchBlob from "rn-fetch-blob";
// import {rootURL} from "../constants/appConstants";

// const getFileExtension = (path) => path.slice(((path.lastIndexOf(".") - 1) >>> 0) + 2);

// export const uploadImage = async (path, token) => {
//   try {
//     let fileExtension = getFileExtension(path);
//     console.log("Uploading from ", path);

//     const uploadData = [
//       {
//         name: "image",
//         filename: path,
//         type: "image/" + fileExtension,
//         data: RNFetchBlob.wrap(path),
//       },
//     ];
//     let response = await RNFetchBlob.fetch(
//       "PUT",
//       rootURL + '/user/displayImage',
//       {
//         Authorization: "Bearer " + token,
//         "Content-Type": "multipart/form-data",
//       },
//       uploadData,
//     );
//     console.log(response.data);
//     return response.data;
//   }catch (e) {
//     console.log("error", e);
//     return false;
//   }
// };

