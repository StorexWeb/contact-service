import { IFieldValidationError, MutationResolver } from "@storexweb/kernel";
// import { EUserType, auth } from "@storexweb/vogo-shared";
import { ContactInterface } from "../../../Interface/IContact";
import CreateContactUseCase from "../../../UseCases/Contact/CreateContactUseCase";
import ContactValidation from "../../../Validators/contactValidation";



export default class createContact extends MutationResolver {
  private createContactUseCase = new CreateContactUseCase(this.context);

  validate({
    input,
  }: {
    input: ContactInterface;
  }): IFieldValidationError[] | Promise<IFieldValidationError[]> {
    return this.applyValidation(ContactValidation, input);
  }

  execute({ input }: { input: ContactInterface }) {
    return this.createContactUseCase.execute(input);
  }
}
