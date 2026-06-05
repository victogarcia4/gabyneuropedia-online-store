import { Resend } from 'resend'

export async function sendPurchaseConfirmationEmail(email: string, buyTarget: 'ebook' | 'app_monthly' | 'app_yearly') {
  const apiKey = process.env.RESEND_API_KEY

  // Validate API key placeholder or empty
  if (!apiKey || apiKey.includes('placeholder')) {
    console.warn('WARNING: RESEND_API_KEY is not configured. Email was not sent, but payment event was processed.')
    return { success: false, error: 'API key not configured' }
  }

  // Determine email content based on purchase
  let subject = ''
  let htmlContent = ''

  const contactEmail = process.env.NEXT_PUBLIC_EMAIL || 'contacto@gabyneuropedia.com'

  if (buyTarget === 'ebook') {
    subject = '📚 ¡Tu eBook "Mitos y Realidades del Tratamiento de TDAH" está listo!'
    htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #4c1d95; font-family: Georgia, serif; text-align: center;">¡Gracias por tu compra!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #334155;">
          Hola,
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #334155;">
          Hemos confirmado tu pago para el eBook <strong>"Mitos y Realidades del Tratamiento de TDAH"</strong>. 
          Aquí tienes tu enlace exclusivo para acceder al eBook interactivo:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://gabyneuropedia.com/ebooks/tdah-modo-turbo" style="background-color: #7c3aed; color: white; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block;">
            📖 Leer eBook Ahora
          </a>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #64748b;">
          Este eBook es interactivo e incluye un <strong>Pomodoro Timer</strong> integrado para ayudarte en tus lecturas y sesiones de estudio.
        </p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center;">
          Si tienes alguna duda o inconveniente, contáctanos a <a href="mailto:${contactEmail}">${contactEmail}</a>.<br />
          Dra. María Gabriela Jiménez Méndez · @gabyneuropedia
        </p>
      </div>
    `
  } else {
    const isYearly = buyTarget === 'app_yearly'
    subject = `📱 ¡Bienvenido a tu Bitácora TDAH GabyNeuroPedia (${isYearly ? 'Plan Anual' : 'Plan Mensual'})!`
    htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #ea580c; font-family: Georgia, serif; text-align: center;">¡Tu Bitácora TDAH está lista!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #334155;">
          Hola,
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #334155;">
          Te damos la bienvenida a la aplicación oficial de seguimiento de TDAH de <strong>GabyNeuroPedia</strong>.
          Tu suscripción ha sido activada con éxito.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #334155;">
          Puedes acceder a tu bitácora digital e iniciar tus registros de tratamiento, síntomas y notas diarias en el siguiente enlace:
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://gabyneuropedia.com/app/dashboard" style="background-color: #ea580c; color: white; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block;">
            🚀 Acceder a mi Bitácora
          </a>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #64748b;">
          <strong>Recuerda:</strong> Puedes exportar tus reportes en PDF, CSV o JSON directamente desde el panel para compartirlos fácilmente con tu médico especialista en tu próxima consulta.
        </p>
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="font-size: 12px; color: #64748b; text-align: center;">
          Si tienes alguna duda o inconveniente, contáctanos a <a href="mailto:${contactEmail}">${contactEmail}</a>.<br />
          Dra. María Gabriela Jiménez Méndez · @gabyneuropedia
        </p>
      </div>
    `
  }

  try {
    // Instantiate Resend dynamically
    const resend = new Resend(apiKey)

    // Note: If using Resend sandbox/testing without a domain verified, you MUST use onboarding@resend.dev as the sender
    const fromSender = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const { data, error } = await resend.emails.send({
      from: `GabyNeuroPedia <${fromSender}>`,
      to: [email],
      subject: subject,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend email error:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error: any) {
    console.error('Resend email exception:', error)
    return { success: false, error: error.message }
  }
}
