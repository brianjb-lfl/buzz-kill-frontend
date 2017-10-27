<p align="center"><img src="/img/logo.jpg" height="120" /></p>
<h1>BACK-END</h1>
<p><em>This document provides general information on the Buzz-Kill app and details on the api.  For more information about the Buzz-Kill client, please see <a href="https://github.com/jackseabolt/buzz-kill-frontend/blob/master/README.md">Buzz-Kill front end</a>.</em></p>


Why Buzz-Kill
-------------
Every restaurant, bar and club owner wants to provide a safe and enjoyable guest experience.  Buzz-Kill is an easy-to-use tool that helps managers and their staff monitor patrons' alcohol consumption and spot potential problems early.  It requires minimal additional effort by servers and presents information in a format that is easy for busy managers to process in a quick glance.

How it Works
------------
<table layout="fixed">
  <tr>
    <td width="55%">
      <p>Buzz-Kill's main screen displays a colored box for each patron in the establishment.  The color-coding and easy-to-read number on the box represent an estimate of that patron's bac based on the count and timing of their drinks during the current visit.</p>
    </td>
    <td width = "40%">
      <img src="/img/buzz-kill-main.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>When a new patron arrives, the server logs them in by table and seat.  To facilitate the bac calculation, the patron's gender is also logged.  As an option for more accuracy, the system can be modified to accept an estimate of the patron's weight.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-addpatron.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>Key information is provided for each patron in a user-friendly format.  The color of the patron info box changes gradually from green to red as the patron has more to drink, and then back toward green over time as the patron metabolizes the alcohol they've consumed.  The number indicates the patron's calculated bac expressed in 100th's of a percent.  This format is used to make the number easier to recognize at a glance.  For more detail, the patron's current time of stay in the establishment and a graphical representation of their drink orders is provided.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patrondet.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>And if someone goes too far, help is a just a click away.  The system will allow a phone call, text message or email to be sent to the recipient of the establishment's choosing.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patronemergency.png" max-height="240px" witdh="auto">
    </td>
  </tr>
</table>

Where to find Buzz-Kill
------

|          **desc**        |                   **location**                                          |
|--------------------------|-------------------------------------------------------------------------|
|live client               |   https://buzz-kill-bbp.herokuapp.com/             .                    |
|client code               |   https://github.com/brianjb-lfl/buzz-kill-frontend                     |
|deployed api              |   https://buzz-kill-backend-bbp.herokuapp.com/                          |
|api code                  |   https://github.com/brianjb-lfl/buzz-kill-back                         | 
For local use
--------

```bash
# Clone repository
git clone https://github.com/jackseabolt/buzz-kill-frontend.git

# Change directory
cd buzz-kill-frontend

# Install NPM dependencies
npm install

# Start the server
npm start
```
