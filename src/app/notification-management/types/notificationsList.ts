import {Moment} from 'moment';

export type NotificationData = {
    id: number
    startDate: Moment
    endDate: Moment
    text: string
}

export type NotificationDataRequest = {
    startDate: string
    endDate: string
    text: string
}

export type NotificationDataRaw = {
    id: number
    startDate: string
    endDate: string
    text: string
}

export type NotificationDataWithAttemptedStatus = NotificationData & {
    attempted: boolean
}
