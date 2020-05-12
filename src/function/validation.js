import * as Yup from "yup";

export default Yup.object({
  shopName: Yup.string().required('Required'),
  ownerName: Yup.string().required('Required'),
  telephone: Yup.string().required('Required'),
  ownerEmail: Yup.string('Required')
    .email('Invalid email address')
    .required('Required')
});