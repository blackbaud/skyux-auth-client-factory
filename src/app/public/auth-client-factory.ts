import {
  BBAuth,
  BBContextProvider,
  BBOmnibar
} from '@blackbaud/auth-client';

function getGlobal(name: string): any {
  const windowRef: any = window;

  return windowRef.BBAuthClient && windowRef.BBAuthClient[name];
}

/**
 * @dynamic
 */
export class BBAuthClientFactory {

  public static get BBAuth(): typeof BBAuth {
    return getGlobal('BBAuth') || BBAuth;
  }

  public static get BBContextProvider(): typeof BBContextProvider {
    return getGlobal('BBContextProvider') || BBContextProvider;
  }

  public static get BBOmnibar(): typeof BBOmnibar {
    return getGlobal('BBOmnibar') || BBOmnibar;
  }

}
