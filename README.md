# TH

A command line tool to move Trello cards based from "Next Up" to "In Progress" to "Code Review" to "Live".

![Makarov Dreyar](http://i451.photobucket.com/albums/qq237/Jasin_Stiner/Makarov_by_ga4000.jpg)

## Install

To install run

```
npm install -g trello-hub
```

## Commands

You can move a card to different states. If you don't provide the id of the card you want to move you'll be asked based on a print of all available cards for the corresponding list.

Notice that the card moved is returned by the process.

### Initialize

```
th -i
```

### Move to In progress

```
th -to inprogress
```

```
th -to inprogress -c card_id
```

### Move to Code Review

```
th -to codereview
```

```
th -to codereview -c card_id
```

### Move to Live

```
th -to live
```

```
th -to live -c card_id
```
