import { v4 as uuidv4 } from 'uuid';

const _GetDeviceID = () => {
  const deviceId = uuidv4();
  return deviceId;
  // Use the deviceId as needed
};
export default _GetDeviceID;
