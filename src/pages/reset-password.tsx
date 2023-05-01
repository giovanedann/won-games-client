import Auth from 'templates/Auth'
import FormResetPassword from 'components/FormResetPassword'

export default function ForgotPassword() {
  return (
    <Auth formTitle="Reset your password">
      <FormResetPassword />
    </Auth>
  )
}
