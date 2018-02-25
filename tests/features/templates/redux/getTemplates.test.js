import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  TEMPLATES_GET_TEMPLATES_BEGIN,
  TEMPLATES_GET_TEMPLATES_SUCCESS,
  TEMPLATES_GET_TEMPLATES_FAILURE,
  TEMPLATES_GET_TEMPLATES_DISMISS_ERROR,
} from 'src/features/templates/redux/constants';

import {
  getTemplates,
  dismissGetTemplatesError,
  reducer,
} from 'src/features/templates/redux/getTemplates';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('templates/redux/getTemplates', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getTemplates succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getTemplates())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', TEMPLATES_GET_TEMPLATES_BEGIN);
        expect(actions[1]).to.have.property('type', TEMPLATES_GET_TEMPLATES_SUCCESS);
      });
  });

  it('dispatches failure action when getTemplates fails', () => {
    const store = mockStore({});

    return store.dispatch(getTemplates({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', TEMPLATES_GET_TEMPLATES_BEGIN);
        expect(actions[1]).to.have.property('type', TEMPLATES_GET_TEMPLATES_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissGetTemplatesError', () => {
    const expectedAction = {
      type: TEMPLATES_GET_TEMPLATES_DISMISS_ERROR,
    };
    expect(dismissGetTemplatesError()).to.deep.equal(expectedAction);
  });

  it('handles action type TEMPLATES_GET_TEMPLATES_BEGIN correctly', () => {
    const prevState = { getTemplatesPending: false };
    const state = reducer(
      prevState,
      { type: TEMPLATES_GET_TEMPLATES_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTemplatesPending).to.be.true;
  });

  it('handles action type TEMPLATES_GET_TEMPLATES_SUCCESS correctly', () => {
    const prevState = { getTemplatesPending: true };
    const state = reducer(
      prevState,
      { type: TEMPLATES_GET_TEMPLATES_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTemplatesPending).to.be.false;
  });

  it('handles action type TEMPLATES_GET_TEMPLATES_FAILURE correctly', () => {
    const prevState = { getTemplatesPending: true };
    const state = reducer(
      prevState,
      { type: TEMPLATES_GET_TEMPLATES_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTemplatesPending).to.be.false;
    expect(state.getTemplatesError).to.exist;
  });

  it('handles action type TEMPLATES_GET_TEMPLATES_DISMISS_ERROR correctly', () => {
    const prevState = { getTemplatesError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: TEMPLATES_GET_TEMPLATES_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.getTemplatesError).to.be.null;
  });
});
