import { ISchemaID } from "@storexweb/kernel";

interface ExpenseCore {
  description: string;
  amount: number;
  date: Date;
  time: string;
  paymentMethod: string;
  receiptAttachment: string;
  type: string;
  expenseTargetId: ISchemaID;
}

export interface ExpenseType extends ExpenseCore {
  createdBy: ISchemaID;
  createdAt: Date;
  updatedAt: Date;
}

export interface ExpenseUseCaseInput extends ExpenseCore {
  createdBy?: ISchemaID;
  createdAt?: Date;
  updatedAt?: Date;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ExpenseDtoInput extends ExpenseCore {}

export interface ExpenseFineInput extends ExpenseCore {
  fineId: ISchemaID;
  createdBy?: ISchemaID;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExpenseMaintenanceInput extends ExpenseCore {
  maintenanceId: ISchemaID;
  createdBy?: ISchemaID;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ExpenseSalaryRecordInput extends ExpenseCore {
  salaryRecordId: ISchemaID;
  createdBy?: ISchemaID;
  createdAt?: Date;
  updatedAt?: Date;
}
