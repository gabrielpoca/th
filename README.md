# Trello Hub

Trello HUb is a command line tool to move Trello cards on a Kanban process.
The available states for now are "Next Up", "In Progress", "Code Review" and "Live".
I hope to refactor in order to make this configurable, for now you'll be asked to choose the lists corresponding of each state from a board of your choice.

The purpose of this tool is to be integrated with git management scripts.
For instance, when you open a pull-request you can automatically move the corresponding Trello card to "Code Review".
I'll have an example soon.

![Makarov Dreyar](http://i451.photobucket.com/albums/qq237/Jasin_Stiner/Makarov_by_ga4000.jpg)

## Install

To install Trello Hub run

```
npm install -g trello-hub
```

Now you can use the command `th`.

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

### Help

```
th -h
```
