export async function getTrackingDetail() {
  try {
    const response = await fetch("tracker/get");
    const data = await response.json();
    return data;
  } catch (e) {
    const error = [];
    console.log("The error from APi is ", e);
    return error;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getTrackingDetail };
