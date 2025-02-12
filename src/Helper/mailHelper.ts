import { env, LogicComponent, renderTemplate } from "@storexweb/kernel";
import { EMailSenderType, MailActions } from "@storexweb/vogo-shared";

export class MailHelper extends LogicComponent {
  private mailActions = new MailActions(this.context);

  sendContact(contactInput: any) {
    const userName = contactInput.name;
    const subject = contactInput.subject;
    const message = contactInput.message;
    const email = contactInput.email;
   

    return this.mailActions.sendMail({
      options: {
        subject: subject,
        html: this.renderTemplate("Templates/contact-mail.pug", {
          userName,
          subject,
          message,
          email
        }),
        to: [{ email: process.env.CONTACT_EMAIL }],
        text: message,
        senderType: EMailSenderType.NoReplay,
      },
    });
  }

  private renderTemplate(path: string, locals: Record<string, any>) {
    const currentYear = new Date().getFullYear();
    return renderTemplate(
      path,
      {
        ...locals,
        currentYear,
        privacyPolicyLink: env("PRIVACY_POLICY_LINK", "#"),
        termsAndConditionsLink: env("TERMS_AND_CONDITIONS_LINK", "#"),
        logoSrc: env("LOGO_SRC", "#"),
        
      }
    );
  }
}
