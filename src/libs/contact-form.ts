export type ContactField = "name" | "phone" | "service" | "district";

export type ContactFormValues = Record<ContactField, string>;

export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactStatus = "idle" | "sending" | "sent" | "error";

export const EMPTY_CONTACT_FORM: ContactFormValues = {
  name: "",
  phone: "",
  service: "",
  district: "",
};

/** Keeps digits only and drops a leading Peru country code (`+51`). */
export function normalizePhone(value: string): string {
  return value.replace(/\D/g, "").replace(/^51(?=\d{9}$)/, "");
}

export function isValidPhone(value: string): boolean {
  const digits = normalizePhone(value);
  return (
    /^9\d{8}$/.test(digits) || // mobile: 9 digits starting with 9
    /^[2-7]\d{6,7}$/.test(digits) || // landline without area code
    /^0\d{8,9}$/.test(digits) // landline with area code, e.g. 01 456 7890
  );
}

export function validateContactForm(
  values: ContactFormValues,
): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.trim().length < 3) {
    errors.name = "Ingresa tu nombre completo.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Ingresa tu teléfono o celular.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Ingresa un teléfono válido (ej. 917 375 664).";
  }

  if (!values.service) {
    errors.service = "Selecciona el tipo de servicio.";
  }

  if (!values.district) {
    errors.district = "Selecciona tu distrito.";
  }

  return errors;
}
