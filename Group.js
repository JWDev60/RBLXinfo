const groupId = 123456; // Replace with your group ID

fetch(`https://groups.roblox.com/v1/groups/${groupId}`)
  .then(response => response.json())
  .then(data => {
    // Access the group information from the response data
    const groupName = data.name;
    const groupDescription = data.description;
    const groupOwner = data.owner;
    const groupEmblemUrl = data.emblemUrl;

    // Do something with the group information
    console.log(`Group Name: ${groupName}`);
    console.log(`Group Description: ${groupDescription}`);
    console.log(`Group Owner: ${groupOwner}`);
    console.log(`Group Emblem URL: ${groupEmblemUrl}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });