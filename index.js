const express = require("express");
const cors = require("cors");
const path = require("path");
const responses = require("./responses");

const app = express();
const port = 8000;

// Parses incoming JSON requests and put the parsed data in req.body
app.use(express.json());

// Enable CORS (https://developers.asana.com/docs/security)
app.use(
  cors({
    origin: "https://app.asana.com",
  })
);

// -------------------- Client endpoint for auth (see auth.html) --------------------

// Docs: https://developers.asana.com/docs/authorization
app.get("/auth", (req, res) => {
  // We recommend creating a secure Oauth flow (https://developers.asana.com/docs/oauth)
  console.log("Auth happened!");
  res.sendFile(path.join(__dirname, "/auth.html"));
});

// -------------------- API endpoints - Rule Action --------------------

// Docs: https://developers.asana.com/docs/get-rule-action-typeahead-results
app.get("/rule/typeahead", (req, res) => {
  console.log("Rule typehead requested!");
  res.json(responses.rule_typehead_response);
});

// Docs: https://developers.asana.com/docs/run-action
app.post("/rule/run_action", (req, res) => {
  console.log("Rule action triggered!");
  console.log(req.body);
  res.json(responses.rule_action_response);
});

// Docs: https://developers.asana.com/docs/get-action-metadata
app.get("/rule/metadata", (req, res) => {
  console.log("Rule metadata requested!");
  res.json(responses.rule_metadata_response);
});

// Docs: https://developers.asana.com/docs/on-action-change-callback
app.post("/rule/on_change", (req, res) => {
  console.log("Rule change triggered!");
  console.log(req.body);
  res.json(responses.rule_on_change_response);
});

// Docs: https://developers.asana.com/docs/on-action-submit-callback
app.post("/rule/on_submit", (req, res) => {
  console.log("Rule submit triggered!");
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
