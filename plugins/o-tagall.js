let handler = async(m, { conn, text, participants }) => {
  let teks = ` *ββγ π₯TAG ALLπ₯ γββ*
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` π€ @${mem.id.split('@')[0]}\n`
				}
                teks += `\nβ»α΅Κ³α΄α΄α΄α΄ α΄α΄αΦαΦΙ΄Ι’α΄Κα΄Ι΄ΓαΦΝΓβ»`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['otagall <pesan>']
handler.tags = ['owner']
handler.command = /^(otagall|otagal|otall|ot)$/i

handler.group = true
handler.owner = true
module.exports = handler
