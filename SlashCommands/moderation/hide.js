const { EmbedBuilder, CommandInteraction , PermissionsBitField } = require('discord.js')

module.exports = {
  name: "hide",
  description: "اخفاء الروم",
  async execute(client, interaction) {

    if (interaction.member.permissions.has("0x0000000000000010")){
    interaction.channel.permissionOverwrites.set([
        {
          id: interaction.channel.guild.roles.everyone,
          deny: [PermissionsBitField.Flags.ViewChannel],
        },
      ]);

    interaction.reply(`✅ تم اخفاء هذه الروم`);
      }else{
          interaction.reply({content : "🙄لا تمتلك صلاحية MANAGE_CHANNELS ", ephemeral:true })
      } 

}
}