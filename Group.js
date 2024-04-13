// Importing necessary libraries
  const axios = require('axios'); // For making HTTP requests
  const cheerio = require('cheerio'); // For parsing HTML
  
  // Function to scrape group info
  async function scrapeGroupInfo(groupId) {
    try {
      // Making a GET request to the group's about page
      const response = await axios.get(`https://www.roblox.com/groups/${groupId}/about`);
      const html = response.data;
      const $ = cheerio.load(html); // Loading HTML into Cheerio for easy manipulation
  
      // Extracting group info
      const ownersUsername = $('.OwnerLink').text(); // Owner's username
      const ownersName = $('.OwnerName').text(); // Owner's name
      const amountOfGames = $('.GamesCount').text(); // Amount of games
      const groupFunds = $('.Currency').text(); // Group funds
      const groupMembers = $('.MemberCount').text(); // Number of group members
      const amountOfGroupRanks = $('.RoleCount').text(); // Number of group ranks
      const costToMakeGroup = $('.Price').text(); // Cost to make the group
  
      // Outputting the extracted data
      console.log("Owner's Username:", ownersUsername);
      console.log("Owner's Name:", ownersName);
      console.log("Amount of Games:", amountOfGames);
      console.log("Group Funds:", groupFunds);
      console.log("Group Members:", groupMembers);
      console.log("Amount of Group Ranks:", amountOfGroupRanks);
      console.log("Cost to Make Group:", costToMakeGroup);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Usage: Replace '32921054' with the actual group ID you want to scrape
  const groupId = '32921054';
  scrapeGroupInfo(groupId);