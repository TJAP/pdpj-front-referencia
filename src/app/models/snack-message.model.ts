export const MessageActions = {
    success: 'OK',
    info: 'OK',
    warning: 'ENTENDI',
    error: 'FECHAR'
};

export class Message {
    id: number;
    text: string;
    action: string;
    icon: string;
}
