import BasicProfileMock from './BasicProfileMock'

/**
 * A test helper for GoogleUser
 *
 * @class GoogleUserMock
 */
export default class GoogleUserMock {
  constructor() {
    this._grantedScopes = ''
    this._rejectGrant = false
    this._isSignedIn = false
  }

  /**
   *
   *
   * @returns {GoogleUserMock}
   * @memberof GoogleUserMock
   */
  get() {
    return this
  }

  /**
   *
   *
   * @returns {boolean}
   * @memberof GoogleUserMock
   */
  isSignedIn() {
    return this._isSignedIn
  }

  /**
   *
   *
   * @param {boolean} signedIn
   * @memberof GoogleUserMock
   */
  setIsSignedIn(signedIn) {
    this._isSignedIn = signedIn
  }

  /**
   *
   *
   * @returns {string} A space delimited string of requested scopes.
   * @memberof GoogleUserMock
   */
  getGrantedScopes() {
    return this._grantedScopes
  }

  /**
   *
   *
   * @param {string} scopes A space delimited string of scopes
   * @memberof GoogleUserMock
   */
  setGrantedScopes(scopes) {
    this._grantedScopes = scopes
  }

  /**
   *
   *
   * @param {string} scopes A space delimited string of scoped.
   * @returns {boolean} Whether the requested scopes were granted or not.
   * @memberof GoogleUserMock
   */
  hasGrantedScopes(scopes) {
    return scopes == this._grantedScopes
  }

  /**
   * Simulate rejecting hasGrantedScope()
   *
   * @param {string} rejectMsg One of 'access_denied' or 'popup_closed_by_user'
   * @memberof GoogleUserMock
   */
  rejectGrant(rejectMsg) {
    this._rejectGrant = rejectMsg
    this._grantedScopes = ''
  }

  /**
   * Simulate resolving hasGrantedScope()
   *
   * @memberof GoogleUserMock
   */
  resolveGrant() {
    this._rejectGrant = null
    this._grantedScopes = ''
  }

  /**
   * Simulate grant() from gapi
   *
   * @param {object} options Google sign-in object
   * @returns {Promise<GoogleUserMock>}
   * @memberof GoogleUserMock
   */
  async grant(options) {
    const { scope } = options
    if (this._rejectGrant) {
      // Simulate grant rejection.
      const error = {
        error: this._rejectGrant,
      }
      throw error
    }
    this.setGrantedScopes(scope)
    return this.get()
  }

  /**
   * @typedef BasicProfileMock
   * @property {function} getId
   * @property {function} getName
   * @property {function} getGivenName
   * @property {function} getFamilyName
   * @property {function} getImageUrl
   * @property {function} getEmail
   */

  /**
   *
   *
   * @returns {BasicProfileMock}
   * @memberof GoogleUserMock
   */
  getBasicProfile() {
    return BasicProfileMock
  }

  getAuthResponse(includeAuthorizationData) {
    const res = {
      expires_in: 123456,
      access_token: 'ACCESS_TOKEN',
      id_token: 'ID_TOKEN',
      scope: 'SCOPE',
      first_issued_at: 1,
      expires_at: 1,
    }

    if (!includeAuthorizationData) {
      delete res.access_token
      delete res.scope
    }

    return res
  }
}
