# Bulk-Move-Google-Calendar-Events
Bulk move calendar events from one Google Calendar to another Google Calendar using Google Apps Script with Google Calendar API

利用 Google Apps Script 及 Google Calendar API 編寫的小程式，可批次修改 (bulk edit) Google Calendar 的事件。

## How to Setup

1. In your Google Drive, create a new Apps Script project.
2. Copy the codes in `_moveTo.gs`, `calendarAPI.gs`, and `_config.gs` from the repository to the Editor.
3. In the script editor, select **Resources** > **Advanced Google services...**.
4. In the **Advanced Google Service** dialog that appears, click the **on/off** switch next to the **Calendar API** service to enable it.
5. Click **OK** to close the dialog.
6. Open the `_config.gs` file, declare your Calendar Ids to the `Cal_Id` object.

## How to Use

1. Change the `enddate` in line 4 of `moveTo.gs`.
2. By default, the `startdate` in line 5 is defined as 31 days before the `enddate`. Please change the code if you want to set a different period of date.
3. In line 12, the `Move1To2()` function moves the events from Calendar1 to Calendar2. Plesae create a custom function if you need to process multiple sets.
4. Replace the value for the `kword` variable (line 19) inside the `Move1To2()` function with the query keyword for the calendar events.
5. Run the `doGet()` function.  
*Note*: A dialog will pop up for authorization when you run the script for the first run.
6. Verify the update in your **Google Calendar**.

## 📹 YouTube

<iframe width="560" height="315" src="https://www.youtube.com/embed/cc4RaE80LN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>