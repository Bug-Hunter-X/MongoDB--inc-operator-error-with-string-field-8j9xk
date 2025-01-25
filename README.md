# MongoDB $inc Operator Error with String Field

This example demonstrates an error that occurs when using MongoDB's `$inc` operator with a string field. The `$inc` operator is designed to increment numeric values; attempting to use it with a string results in an error.

## Bug

The provided code attempts to increment the `age` field, which is a string, using the `$inc` operator. This will produce an error because `$inc` expects a numeric field.

## Solution

The solution involves ensuring that the `age` field is of numeric type (e.g., NumberInt or NumberLong) before using the `$inc` operator.  Alternatively, convert the string to a number before using the `$inc` operator.