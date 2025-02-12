import { BaseEntity, IEntityOptions, Schema } from "@storexweb/kernel";

const contactSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
});

export default class ContactEntity extends BaseEntity {
    schema: Schema = contactSchema;
    options: IEntityOptions = {
        createdAtKey: "createdAt",
        createdByKey: "createdBy",
        updatedAtKey: "updatedAt",
    };
}
