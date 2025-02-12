import { ContactUseCaseInput } from "Interface/IContact";
import ContactRepository from "../../Repository/ContactRepository";
import { LogicComponent } from "@storexweb/kernel";
import { MailHelper } from "../../Helper/mailHelper";

export default class CreateContactUseCase extends LogicComponent {
  private mailHelper = new MailHelper(this.context);

  async execute(contactInput: ContactUseCaseInput) {
    const language = this.context.req.headers["accept-language"] || "en";

    const contactData = {
      ...contactInput,
      language, 
    };

    const contact = this.getRepository<ContactRepository>("contact").create(contactData);

    await this.mailHelper.sendContact(contactData);

    return contact;
  }
}
