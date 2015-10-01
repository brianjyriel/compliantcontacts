/**
 *
 *
 * Created by brianjyriel on 10/1/15.
 */


/**
 *
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param telNum
 * @constructor
 */
var Contact = function(firstName, lastName, address, zipcode, telNum) {

  /**
   * Contains the necessary variables for the array.
   */
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telNum = telNum;
  var callNum = 0;

  this.call = function() {
    callNum++; //increases callNum by 1
    return true;
  };

  this.numCalls = function() {
    return callNum;
  };

};

var ContactList = function() {

  var contactList = [];

  /**
   * Adds the contact once function is called
   * @param contact
   * @returns {boolean}
   */
  this.addContact = function(contact) {
    contactList.push(contact);
    return true;
  };

  /**
   * Returns the length of the array
   * @returns {Number}
   */
  this.numContacts = function() {
    return contactList.length; //length of array
  };

  /**
   * Finds contact based on last name
   * @param last
   * @returns {Array}
   */
  this.findContact = function(last) {
    var lastNameList = [];
    for(var i = 0; i < contactList.length; i++ )
    {
      if(contactList[i].lastName === last)
      {
        lastNameList.push(contactList[i]);
      }
    }
    return lastNameList;
  };

  /**
   * Deletes contact based on first and last name
   * @param first
   * @param last
   */
  this.deleteContact = function(first, last) {
    for(var i = 0; i < contactList.length; i++)
    {
      if(contactList[i].firstName === first && contactList[i].lastName === last)
      {
        contactList.splice(i, 1);
      }
    }

  };
  /**
   * Compares last name
   * @returns {number}
   */
  this.compareLast = function()
  {
    if(a.lastName > b.lastName )
    {
      return 1;
    }
    else if(a.lastName < b.lastName)
    {
      return -1
    }
    else {
      return 0;
    }

  };

  /**
   * Sorts the contact list once it is called.
   * @returns {Array}
   */
  this.listContacts = function() {
    return _.sortBy(contactList, contactList.lastName);
  };

};
