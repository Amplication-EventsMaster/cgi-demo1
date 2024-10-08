/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Attendee } from "../../attendee/base/Attendee";

import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  IsInt,
  IsBoolean,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { DailyEventReference } from "../../dailyEventReference/base/DailyEventReference";
import { DestinationCalendar } from "../../destinationCalendar/base/DestinationCalendar";
import { EventType } from "../../eventType/base/EventType";
import { Payment } from "../../payment/base/Payment";
import { BookingReference } from "../../bookingReference/base/BookingReference";
import { EnumBookingStatus } from "./EnumBookingStatus";
import { User } from "../../user/base/User";
import { WorkflowReminder } from "../../workflowReminder/base/WorkflowReminder";

@ObjectType()
class Booking {
  @ApiProperty({
    required: false,
    type: () => [Attendee],
  })
  @ValidateNested()
  @Type(() => Attendee)
  @IsOptional()
  attendees?: Array<Attendee>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cancellationReason!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  customInputs!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => DailyEventReference,
  })
  @ValidateNested()
  @Type(() => DailyEventReference)
  @IsOptional()
  dailyRef?: DailyEventReference | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: false,
    type: () => DestinationCalendar,
  })
  @ValidateNested()
  @Type(() => DestinationCalendar)
  @IsOptional()
  destinationCalendar?: DestinationCalendar | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicEventSlugRef!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  dynamicGroupSlugRef!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  endTime!: Date;

  @ApiProperty({
    required: false,
    type: () => EventType,
  })
  @ValidateNested()
  @Type(() => EventType)
  @IsOptional()
  eventType?: EventType | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fromReschedule!: string | null;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  id!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location!: string | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  paid!: boolean;

  @ApiProperty({
    required: false,
    type: () => [Payment],
  })
  @ValidateNested()
  @Type(() => Payment)
  @IsOptional()
  payment?: Array<Payment>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  recurringEventId!: string | null;

  @ApiProperty({
    required: false,
    type: () => [BookingReference],
  })
  @ValidateNested()
  @Type(() => BookingReference)
  @IsOptional()
  references?: Array<BookingReference>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rejectionReason!: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  rescheduled!: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  smsReminderNumber!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startTime!: Date;

  @ApiProperty({
    required: true,
    enum: EnumBookingStatus,
  })
  @IsEnum(EnumBookingStatus)
  @Field(() => EnumBookingStatus, {
    nullable: true,
  })
  status?: "CANCELLED" | "ACCEPTED" | "REJECTED" | "PENDING";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  uid!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;

  @ApiProperty({
    required: false,
    type: () => [WorkflowReminder],
  })
  @ValidateNested()
  @Type(() => WorkflowReminder)
  @IsOptional()
  workflowReminders?: Array<WorkflowReminder>;
}

export { Booking as Booking };
