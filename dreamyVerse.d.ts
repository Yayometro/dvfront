import mongoose, { Schema, Document } from "mongoose";
export interface IDreamDocument {
  user: string | IUserDocument;
  visibility: {
    isPublic: boolean;
    isVisibleForFriends: boolean;
    othersCanComment: boolean;
    othersCanShare: boolean;
    visibleFor: string[] | [] | null;
  };
  dream: string | null;
  title: string;
  date: Date | string | null;
  category: string | null;
  image: string | null;
  people: {
    fromApp:
      | [
          {
            wantedToKnow: boolean;
            person: string;
          }
        ]
      | [] | IUserDocument[];
    fromNoApp: string[] | [];
    noNotified: string[] | [];
  } | null;
  recording: string | null;
  isLucid: boolean | null;
  likes?: string | object[] | null;
  comments?: string | object[] | null;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  _id?: string;
}

interface IUserDocument extends Document {
    //   id: string;
    _id: string;
    username: string;
    mail: string;
    password: string;
    name?: string;
    lastName?: string;
    phone?: number;
    avatar?: string;
    zodiac?: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
  }

  export interface ICommentDream {
    user: mongoose.Types.ObjectId | IUserDocument |string | null 
    dream: string | null
    visibility?: {
      isPublic: boolean | null;
      isVisibleForFriends: boolean | null;
      visibleFor: [mongoose.Types.ObjectId] | null;
    } | null;
    image?: string | null;
    replayTo?: mongoose.Types.ObjectId | string | null
    isSubComment?: boolean | null;
    comment?: string | null;
    _id?: mongoose.Types.ObjectId | string | null
    createdAt?: "string" | Date 
  }
  export interface IReactionDocument extends Document {
    user: mongoose.Types.ObjectId | IUserDocument| string | null 
    dream?: mongoose.Types.ObjectId | string | null
    comment?: mongoose.Types.ObjectId | string | null
    post?: mongoose.Types.ObjectId | string | null
    message?: mongoose.Types.ObjectId | string | null
    visibility?: {
        isPublic: boolean;
        isVisibleForFriends: boolean;
        visibleFor: [mongoose.Types.ObjectId];
    } | string | null
    icon?:  string | null
}

export interface IFollowDocument extends Document {
    follower:  IUserDocument| string | null ;
    user:  IUserDocument| string | null ;
    dream:  IDreamDocument| string | null ;
    post:  IUserDocument| string | null ;
    _id?: string;
}

export interface INotification extends Document {
  user: mongoose.Types.ObjectId;
  type: string;
  redirectionalId: string;
  message: string;
  read: boolean;
  action?: string;
  createdAt: Date;
  _id: string
}

export interface IMessage extends Document {
  fromUser: mongoose.Types.ObjectId;
  receiverUser: mongoose.Types.ObjectId;
  conversation: mongoose.Types.ObjectId;
  content: {
    message: string;
    media?: string | null
  };
  read: boolean,
  removed: {
    for: mongoose.Types.ObjectId[] | string[] | [];
    forAll: boolean;
  };
  createdAt?: string | Date
}
export interface IConversation extends Document {
  participants: mongoose.Types.ObjectId[] | IUserDocument[] | string[];
  isGroup: boolean;
  isBlocked?: boolean;
  isMuted?: boolean;
}

export type typeDocument = "dream" | "post" | "message" | "comment"

export interface MessageContextType {
  userSelectedConversation: IUserDocument | null;
  setUserSelectedConversation: React.Dispatch<
    React.SetStateAction<IUserDocument | null>
  >;
  navigation: "list" | "conversation";
  setNavigation: React.Dispatch<
    React.SetStateAction<"list" | "conversation">
  >;
  currentConversation: IConversation | null;
  setCurrentConversation: React.Dispatch<
    React.SetStateAction<IConversation | null>
  >;
  // unreadMessages: IMessage[];
  // setUnreadMessages: React.Dispatch<React.SetStateAction<any[]>>;
  unreadMessagesActions: IUnreadMessageActions,
  setUnreadMessagesActions: React.Dispatch<SetStateAction<IUnreadMessageActions>>
  addUnreadMessage: (message: IMessage) => void
  addEditedMessage: (message: IMessage) => void
  addRemovedMessage: (message: IMessage) => void
  addMarkedAsVisibleMessage: (message: IMessage) => void
  removeUnreadMessage: (messages: IMessage[], conversationId: IdInterfaceMongoo) => void
  removeEditedMessage: (messages: IMessage[], conversationId: IdInterfaceMongoo) => void
  removeRemovedMessage: (messages: IMessage[], conversationId: IdInterfaceMongoo) => void
  handleConversationClick: (conversation: IConversation) => void;
  removeMarkedVisibleMessage: (messages: IMessage[], conversationId: IdInterfaceMongoo) => void
  handleBackClick: () => void;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}

export type IdInterfaceMongoo = mongoose.Types.ObjectId
export type actionSocketMessage = "newMessage" | "removeFor" | "removeForAll" | "editContent" | "markedAsRead" | "visibleAgain"
export type removeForHandleType = "RemoveForTheOtherOnly" | "RestoredForTheOther" | "RemovedForMyselfOnly" | "RestoredForMyself"

export interface MessageSocketObject {
  iMessage: IMessage,
  action: actionSocketMessage,
  message: string
}

export interface IUnreadMessageActions {
  unread: IMessage[],
  edited: IMessage[],
  removed: IMessage[],
  markedVisible: IMessage[],
}

declare module '*.mp3';