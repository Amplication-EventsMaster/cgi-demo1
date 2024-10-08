/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DailyEventReferenceCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BookingWhereUniqueInput)
  @IsOptional()
  @Field(() => BookingWhereUniqueInput, {
    nullable: true,
  })
  booking?: BookingWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  dailytoken!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  dailyurl!: string;
}

export { DailyEventReferenceCreateInput as DailyEventReferenceCreateInput };
