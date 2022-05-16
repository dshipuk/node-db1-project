exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log("Payload Check")
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("Unique Name")
  next()
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("Account Id")
  next()
}
