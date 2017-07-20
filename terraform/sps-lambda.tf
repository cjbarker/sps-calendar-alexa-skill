# #############################################
# Provisions Alexa Skill via AWS Lambda
# https://www.terraform.io/docs/providers/aws/r/lambda_function.html
# #############################################

provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

# Setup Lambda Authorization Role
resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# Here is a first lambda function that will run the code `sps.handler`
# TODO see if can handle wild-cards on zip file
resource "aws_lambda_function" "test_lambda" {
  filename         = "sps-calendar*.zip"
  function_name    = "lambda_function_name"
  role             = "${aws_iam_role.iam_for_lambda.arn}"
  handler          = "handler"
  source_code_hash = "${base64sha256(file("sps-calendar*.zip"))}"
  runtime          = "nodejs6.10"

  environment {
    variables = {
      foo = "bar"
    }
  }
}
