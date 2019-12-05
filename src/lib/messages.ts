import {TokenCheckRes, TokenRequestRes} from 'root/api/userbytokenid';
import {Account, LatestSettings, OverlaySettings} from 'root/app/settings_store';
import {CardPlayed} from 'root/models/cards';
import {Metadata} from 'root/models/metadata';
import {UserResult} from 'root/models/userbytokenid';

export interface Messages {
  'start-sync': string;
  'sync-process': TokenRequestRes;
  'token-waiter': string;
  'token-waiter-responce': {
    res: TokenCheckRes | undefined;
    request: string;
  };
  'get-userbytokenid': string;
  'userbytokenid-responce': UserResult;
  'token-input': Account;
  'minimize-me': undefined;
  'set-settings': LatestSettings;
  'set-o-settings': OverlaySettings;
  'kill-current-token': undefined;
  'set-log-path': undefined;
  'default-log-path': undefined;
  'old-log': undefined;
  'wipe-all': undefined;
  'check-updates': undefined;
  'stop-tracker': undefined;
  'apply-update': undefined;
  'set-creds': {
    account: Account;
    source: string;
  };
  'show-prompt': {message: string; autoclose: number};
  'new-account': undefined;
  'show-status': {color: string; message: string};
  'set-screenname': string;
  'match-started': {
    matchId: string;
    uid: string;
    seatId: number;
    gameNumber: number;
    deckstruct: {card: number; cardnum: number}[];
    humanname: string;
  };
  'set-metadata': Metadata;
  mulligan: boolean;
  'set-version': string;
  'show-update-button': undefined;
  'set-setting-autorun': boolean;
  'set-setting-minimized': boolean;
  'set-setting-manualupdate': boolean;
  'set-setting-overlay': boolean;
  'set-setting-icon': string;
  'match-over': undefined;
  'card-played': CardPlayed;
  'set-setting-o-hidezero': boolean;
  'set-setting-o-hidemy': boolean;
  'set-setting-o-hideopp': boolean;
  'set-setting-o-showcardicon': boolean;
  'set-setting-o-leftdigit': number;
  'set-setting-o-rightdigit': number;
  'set-setting-o-bottomdigit': number;
  'set-setting-o-neverhide': boolean;
  'set-setting-o-mydecks': boolean;
  'set-setting-o-cardhover': boolean;
  'set-setting-o-timers': boolean;
}

export interface MessagePayload {
  message: keyof Messages;
  data: Messages[keyof Messages];
}
