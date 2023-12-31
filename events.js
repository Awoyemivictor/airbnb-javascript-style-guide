// ======== EVENTS ==========
// When attaching data payloads to events (whether DOM events or something more proprietary
// like Backbone events), pass an object literal (also known as "hash") instead of a raw value.
// This allows a subsequent contributor to add more data to the event payload without finding and
// updating every handler for the event. For example, instead of:
// bad
$(this).trigger('listingUpdated', listing.id);

// ...

$(this).on('listingUpdated', (e, listingID) => {
    // do something with listingID
});

// good
$(this).trigger('listingUpdated', { listingID: listing.id });

// ...

$(this).on('listingUpdated', (e, data) => {
    // do something with data.listingID
});

