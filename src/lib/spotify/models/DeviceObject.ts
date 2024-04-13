/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeviceObject = {
  /**
   * The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary.
   */
  id?: string | null;
  /**
   * If this device is the currently active device.
   */
  is_active?: boolean;
  /**
   * If this device is currently in a private session.
   */
  is_private_session?: boolean;
  /**
   * Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device.
   */
  is_restricted?: boolean;
  /**
   * A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model.
   */
  name?: string;
  /**
   * Device type, such as "computer", "smartphone" or "speaker".
   */
  type?: string;
  /**
   * The current volume in percent.
   */
  volume_percent?: number | null;
  /**
   * If this device can be used to set the volume.
   */
  supports_volume?: boolean;
};
