export * from '../models/Attendee.ts';
export * from '../models/AuthenticationError.ts';
export * from '../models/AuthenticationErrors.ts';
export * from '../models/AuthorizationError.ts';
export * from '../models/AuthorizationErrors.ts';
export * from '../models/BadRequestError.ts';
export * from '../models/ChatMessage.ts';
export * from '../models/CompaniesValue.ts';
export * from '../models/Company.ts';
export * from '../models/CompanyData.ts';
export * from '../models/CompanyListEntry.ts';
export * from '../models/CompanyPaged.ts';
export * from '../models/CompanyValue.ts';
export * from '../models/ConflictError.ts';
export * from '../models/DateValue.ts';
export * from '../models/Dropdown.ts';
export * from '../models/DropdownValue.ts';
export * from '../models/DropdownsValue.ts';
export * from '../models/Email.ts';
export * from '../models/Field.ts';
export * from '../models/FieldMetadata.ts';
export * from '../models/FieldMetadataPaged.ts';
export * from '../models/FieldValue.ts';
export * from '../models/FloatValue.ts';
export * from '../models/FloatsValue.ts';
export * from '../models/FormulaNumber.ts';
export * from '../models/FormulaValue.ts';
export * from '../models/Grant.ts';
export * from '../models/Interaction.ts';
export * from '../models/InteractionValue.ts';
export * from '../models/List.ts';
export * from '../models/ListEntry.ts';
export * from '../models/ListEntryPaged.ts';
export * from '../models/ListEntryWithEntity.ts';
export * from '../models/ListEntryWithEntityPaged.ts';
export * from '../models/ListPaged.ts';
export * from '../models/ListWithType.ts';
export * from '../models/ListWithTypePaged.ts';
export * from '../models/Location.ts';
export * from '../models/LocationValue.ts';
export * from '../models/LocationsValue.ts';
export * from '../models/Meeting.ts';
export * from '../models/MethodNotAllowedError.ts';
export * from '../models/NotAcceptableError.ts';
export * from '../models/NotFoundError.ts';
export * from '../models/NotFoundErrors.ts';
export * from '../models/NotImplementedError.ts';
export * from '../models/Opportunity.ts';
export * from '../models/OpportunityListEntry.ts';
export * from '../models/OpportunityPaged.ts';
export * from '../models/OpportunityWithFields.ts';
export * from '../models/Pagination.ts';
export * from '../models/Person.ts';
export * from '../models/PersonData.ts';
export * from '../models/PersonListEntry.ts';
export * from '../models/PersonPaged.ts';
export * from '../models/PersonValue.ts';
export * from '../models/PersonsValue.ts';
export * from '../models/PhoneCall.ts';
export * from '../models/RankedDropdown.ts';
export * from '../models/RankedDropdownValue.ts';
export * from '../models/RateLimitError.ts';
export * from '../models/SavedView.ts';
export * from '../models/SavedViewPaged.ts';
export * from '../models/ServerError.ts';
export * from '../models/Tenant.ts';
export * from '../models/TextValue.ts';
export * from '../models/TextsValue.ts';
export * from '../models/UnprocessableEntityError.ts';
export * from '../models/UnsupportedMediaTypeError.ts';
export * from '../models/User.ts';
export * from '../models/ValidationError.ts';
export * from '../models/ValidationErrors.ts';
export * from '../models/WhoAmI.ts';

import { Attendee } from '../models/Attendee.ts';
import { AuthenticationError, AuthenticationErrorCodeEnum    } from '../models/AuthenticationError.ts';
import { AuthenticationErrors } from '../models/AuthenticationErrors.ts';
import { AuthorizationError, AuthorizationErrorCodeEnum    } from '../models/AuthorizationError.ts';
import { AuthorizationErrors } from '../models/AuthorizationErrors.ts';
import { BadRequestError, BadRequestErrorCodeEnum    } from '../models/BadRequestError.ts';
import { ChatMessage, ChatMessageTypeEnum   , ChatMessageDirectionEnum      } from '../models/ChatMessage.ts';
import { CompaniesValue, CompaniesValueTypeEnum    } from '../models/CompaniesValue.ts';
import { Company } from '../models/Company.ts';
import { CompanyData } from '../models/CompanyData.ts';
import { CompanyListEntry , CompanyListEntryTypeEnum      } from '../models/CompanyListEntry.ts';
import { CompanyPaged } from '../models/CompanyPaged.ts';
import { CompanyValue, CompanyValueTypeEnum    } from '../models/CompanyValue.ts';
import { ConflictError, ConflictErrorCodeEnum    } from '../models/ConflictError.ts';
import { DateValue, DateValueTypeEnum    } from '../models/DateValue.ts';
import { Dropdown } from '../models/Dropdown.ts';
import { DropdownValue, DropdownValueTypeEnum    } from '../models/DropdownValue.ts';
import { DropdownsValue, DropdownsValueTypeEnum    } from '../models/DropdownsValue.ts';
import { Email, EmailTypeEnum         } from '../models/Email.ts';
import { Field  , FieldTypeEnum  , FieldEnrichmentSourceEnum    } from '../models/Field.ts';
import { FieldMetadata  , FieldMetadataTypeEnum  , FieldMetadataEnrichmentSourceEnum  , FieldMetadataValueTypeEnum   } from '../models/FieldMetadata.ts';
import { FieldMetadataPaged } from '../models/FieldMetadataPaged.ts';
import { FieldValueClass } from '../models/FieldValue.ts';
import { FloatValue, FloatValueTypeEnum    } from '../models/FloatValue.ts';
import { FloatsValue, FloatsValueTypeEnum    } from '../models/FloatsValue.ts';
import { FormulaNumber } from '../models/FormulaNumber.ts';
import { FormulaValue, FormulaValueTypeEnum    } from '../models/FormulaValue.ts';
import { Grant, GrantTypeEnum     } from '../models/Grant.ts';
import { InteractionClass } from '../models/Interaction.ts';
import { InteractionValue, InteractionValueTypeEnum    } from '../models/InteractionValue.ts';
import { List } from '../models/List.ts';
import { ListEntry } from '../models/ListEntry.ts';
import { ListEntryPaged } from '../models/ListEntryPaged.ts';
import { ListEntryWithEntityClass } from '../models/ListEntryWithEntity.ts';
import { ListEntryWithEntityPaged } from '../models/ListEntryWithEntityPaged.ts';
import { ListPaged } from '../models/ListPaged.ts';
import { ListWithType     , ListWithTypeTypeEnum   } from '../models/ListWithType.ts';
import { ListWithTypePaged } from '../models/ListWithTypePaged.ts';
import { Location } from '../models/Location.ts';
import { LocationValue, LocationValueTypeEnum    } from '../models/LocationValue.ts';
import { LocationsValue, LocationsValueTypeEnum    } from '../models/LocationsValue.ts';
import { Meeting, MeetingTypeEnum         } from '../models/Meeting.ts';
import { MethodNotAllowedError, MethodNotAllowedErrorCodeEnum    } from '../models/MethodNotAllowedError.ts';
import { NotAcceptableError, NotAcceptableErrorCodeEnum    } from '../models/NotAcceptableError.ts';
import { NotFoundError, NotFoundErrorCodeEnum    } from '../models/NotFoundError.ts';
import { NotFoundErrors } from '../models/NotFoundErrors.ts';
import { NotImplementedError, NotImplementedErrorCodeEnum    } from '../models/NotImplementedError.ts';
import { Opportunity } from '../models/Opportunity.ts';
import { OpportunityListEntry , OpportunityListEntryTypeEnum      } from '../models/OpportunityListEntry.ts';
import { OpportunityPaged } from '../models/OpportunityPaged.ts';
import { OpportunityWithFields } from '../models/OpportunityWithFields.ts';
import { Pagination } from '../models/Pagination.ts';
import { Person     , PersonTypeEnum    } from '../models/Person.ts';
import { PersonData    , PersonDataTypeEnum   } from '../models/PersonData.ts';
import { PersonListEntry , PersonListEntryTypeEnum      } from '../models/PersonListEntry.ts';
import { PersonPaged } from '../models/PersonPaged.ts';
import { PersonValue, PersonValueTypeEnum    } from '../models/PersonValue.ts';
import { PersonsValue, PersonsValueTypeEnum    } from '../models/PersonsValue.ts';
import { PhoneCall, PhoneCallTypeEnum      } from '../models/PhoneCall.ts';
import { RankedDropdown } from '../models/RankedDropdown.ts';
import { RankedDropdownValue, RankedDropdownValueTypeEnum    } from '../models/RankedDropdownValue.ts';
import { RateLimitError, RateLimitErrorCodeEnum    } from '../models/RateLimitError.ts';
import { SavedView  , SavedViewTypeEnum    } from '../models/SavedView.ts';
import { SavedViewPaged } from '../models/SavedViewPaged.ts';
import { ServerError, ServerErrorCodeEnum    } from '../models/ServerError.ts';
import { Tenant } from '../models/Tenant.ts';
import { TextValue, TextValueTypeEnum    } from '../models/TextValue.ts';
import { TextsValue, TextsValueTypeEnum    } from '../models/TextsValue.ts';
import { UnprocessableEntityError, UnprocessableEntityErrorCodeEnum    } from '../models/UnprocessableEntityError.ts';
import { UnsupportedMediaTypeError, UnsupportedMediaTypeErrorCodeEnum    } from '../models/UnsupportedMediaTypeError.ts';
import { User } from '../models/User.ts';
import { ValidationError, ValidationErrorCodeEnum     } from '../models/ValidationError.ts';
import { ValidationErrors } from '../models/ValidationErrors.ts';
import { WhoAmI } from '../models/WhoAmI.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AuthenticationErrorCodeEnum",
    "AuthorizationErrorCodeEnum",
    "BadRequestErrorCodeEnum",
    "ChatMessageTypeEnum",
    "ChatMessageDirectionEnum",
    "CompaniesValueTypeEnum",
    "CompanyListEntryTypeEnum",
    "CompanyValueTypeEnum",
    "ConflictErrorCodeEnum",
    "DateValueTypeEnum",
    "DropdownValueTypeEnum",
    "DropdownsValueTypeEnum",
    "EmailTypeEnum",
    "FieldTypeEnum",
    "FieldEnrichmentSourceEnum",
    "FieldMetadataTypeEnum",
    "FieldMetadataEnrichmentSourceEnum",
    "FieldMetadataValueTypeEnum",
    "FieldValueTypeEnum",
    "FloatValueTypeEnum",
    "FloatsValueTypeEnum",
    "FormulaValueTypeEnum",
    "GrantTypeEnum",
    "InteractionTypeEnum",
    "InteractionDirectionEnum",
    "InteractionValueTypeEnum",
    "ListEntryWithEntityTypeEnum",
    "ListWithTypeTypeEnum",
    "LocationValueTypeEnum",
    "LocationsValueTypeEnum",
    "MeetingTypeEnum",
    "MethodNotAllowedErrorCodeEnum",
    "NotAcceptableErrorCodeEnum",
    "NotFoundErrorCodeEnum",
    "NotImplementedErrorCodeEnum",
    "OpportunityListEntryTypeEnum",
    "PersonTypeEnum",
    "PersonDataTypeEnum",
    "PersonListEntryTypeEnum",
    "PersonValueTypeEnum",
    "PersonsValueTypeEnum",
    "PhoneCallTypeEnum",
    "RankedDropdownValueTypeEnum",
    "RateLimitErrorCodeEnum",
    "SavedViewTypeEnum",
    "ServerErrorCodeEnum",
    "TextValueTypeEnum",
    "TextsValueTypeEnum",
    "UnprocessableEntityErrorCodeEnum",
    "UnsupportedMediaTypeErrorCodeEnum",
    "ValidationErrorCodeEnum",
]);

let typeMap: {[index: string]: any} = {
    "Attendee": Attendee,
    "AuthenticationError": AuthenticationError,
    "AuthenticationErrors": AuthenticationErrors,
    "AuthorizationError": AuthorizationError,
    "AuthorizationErrors": AuthorizationErrors,
    "BadRequestError": BadRequestError,
    "ChatMessage": ChatMessage,
    "CompaniesValue": CompaniesValue,
    "Company": Company,
    "CompanyData": CompanyData,
    "CompanyListEntry": CompanyListEntry,
    "CompanyPaged": CompanyPaged,
    "CompanyValue": CompanyValue,
    "ConflictError": ConflictError,
    "DateValue": DateValue,
    "Dropdown": Dropdown,
    "DropdownValue": DropdownValue,
    "DropdownsValue": DropdownsValue,
    "Email": Email,
    "Field": Field,
    "FieldMetadata": FieldMetadata,
    "FieldMetadataPaged": FieldMetadataPaged,
    "FieldValue": FieldValueClass,
    "FloatValue": FloatValue,
    "FloatsValue": FloatsValue,
    "FormulaNumber": FormulaNumber,
    "FormulaValue": FormulaValue,
    "Grant": Grant,
    "Interaction": InteractionClass,
    "InteractionValue": InteractionValue,
    "List": List,
    "ListEntry": ListEntry,
    "ListEntryPaged": ListEntryPaged,
    "ListEntryWithEntity": ListEntryWithEntityClass,
    "ListEntryWithEntityPaged": ListEntryWithEntityPaged,
    "ListPaged": ListPaged,
    "ListWithType": ListWithType,
    "ListWithTypePaged": ListWithTypePaged,
    "Location": Location,
    "LocationValue": LocationValue,
    "LocationsValue": LocationsValue,
    "Meeting": Meeting,
    "MethodNotAllowedError": MethodNotAllowedError,
    "NotAcceptableError": NotAcceptableError,
    "NotFoundError": NotFoundError,
    "NotFoundErrors": NotFoundErrors,
    "NotImplementedError": NotImplementedError,
    "Opportunity": Opportunity,
    "OpportunityListEntry": OpportunityListEntry,
    "OpportunityPaged": OpportunityPaged,
    "OpportunityWithFields": OpportunityWithFields,
    "Pagination": Pagination,
    "Person": Person,
    "PersonData": PersonData,
    "PersonListEntry": PersonListEntry,
    "PersonPaged": PersonPaged,
    "PersonValue": PersonValue,
    "PersonsValue": PersonsValue,
    "PhoneCall": PhoneCall,
    "RankedDropdown": RankedDropdown,
    "RankedDropdownValue": RankedDropdownValue,
    "RateLimitError": RateLimitError,
    "SavedView": SavedView,
    "SavedViewPaged": SavedViewPaged,
    "ServerError": ServerError,
    "Tenant": Tenant,
    "TextValue": TextValue,
    "TextsValue": TextsValue,
    "UnprocessableEntityError": UnprocessableEntityError,
    "UnsupportedMediaTypeError": UnsupportedMediaTypeError,
    "User": User,
    "ValidationError": ValidationError,
    "ValidationErrors": ValidationErrors,
    "WhoAmI": WhoAmI,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
