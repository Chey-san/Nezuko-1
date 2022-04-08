import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rin',
            description: 'Displays the info.',
            category: 'misc',
            usage: `${client.config.prefix}rin`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/dc6c9b7e2c55a3d767635.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `〽️ *Nezuko* 〽️\n\n🧣 *Description: A WhatsApp Bot With Rich Anime Features.*\n\n🌐 *URL: https://github.com/Toshiro223/Nezuko* \n\n 📒 *Guide: https://github.com/Toshiro223/Nezuko-Guides* \n`,
    }
}
