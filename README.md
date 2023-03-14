To Do list:

Create git repository

Set up Mongo DB

Create models:
    Beer [done]
        -ID
        -Brand
        -Name
        -Style
    Food
        -Name
        -Attributes List
    Beer Style
        -Name
        -Attributes List
    Beer Attributes
        -Name
        -Food Attributes to pair with
            FUTURE: Create Cuts field and Compliments Field
    Food Attributes
        -Name
    User??
        Learn how to do login reg for MERN
    Pairings??
        -ID
        -userId
        -Food
        -Beer
        -Comments

Create Routes

Create Controllers

Get Login Registration set up

All front end:
    Open with login reg
    Dashboard with your pairings, or recently added pairings 
        -Option to add new pairings
        -Option to view a pairing
        -Option to delete pairing
    View pages for each pairing
    Form for adding pairing
    Form for editing pairing

FUTURE optional/secondary functions:
    Images of beers and food
    Cuts and Compliments fields in the beer attributes model
        Add complexity
    User profile with info and general tastes
    Rating system for pairings
        Other users can vote on your pairings
        Average rating displayed
    Allow users to say if they've had this pairing or not
        "Tasted" field in user model
            Reference ID from pairing user confirms they have tasted
        "Tasters" field in pairing model
            Incrementing with 