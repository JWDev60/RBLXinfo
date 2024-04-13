const fetch = require('node-fetch');

// Replace 'GROUP_ID' with the actual group ID you want to retrieve information for
const groupId = 'GROUP_ID';

// Function to make the API request and retrieve group information
// Replace 'YOUR_AUTHORIZATION_TOKEN' with the Authorization Token You Have Made
async function getGroupInfo(groupId) {
  const url = `https://groups.roblox.com/v1/groups/${groupId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: 'YOUR_AUTHORIZATION_TOKEN'
    }
  });
  const groupInfo = await response.json();

  // Extract the required group information
  const ownerName = groupInfo.owner.userDisplayName;
  const createdDate = groupInfo.created;
  const memberCount = groupInfo.memberCount;
  const gamesCount = groupInfo.publicEntryAllowedGamesCount;
  const ranksCount = groupInfo.roles.length;

  // Print the group information
  console.log('Owner Name:', ownerName);
  console.log('Group Creating Date:', createdDate);
  console.log('Amount Of Group Members:', memberCount);
  console.log('Amount Of Published Games:', gamesCount);
  console.log('Amount Of Group Ranks:', ranksCount);
}

// Call the function with the group ID
getGroupInfo(groupId);