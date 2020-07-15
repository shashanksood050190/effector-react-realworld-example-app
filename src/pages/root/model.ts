import { createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import { get } from '../../api';
import { $location } from '../../router';
import { AuthUserResponse } from '../../auth';
import { getYourFeedFx } from '../your-feed';
import { getGlobalFeedFx } from '../global-feed';
import { Tags } from './types';

export const RootGate = createGate();

export const $tags = createStore<string[]>([]);

export const $$currentTag = $location.map((x) =>
  new URLSearchParams(x.search).get('name'),
);

export const fetchUserFx = createEffect({
  handler: () => get<AuthUserResponse>('/user'),
});

export const getTagsFx = createEffect({
  handler: () => get<Tags>('/tags'),
});

export const initAuthAppFx = createEffect({
  handler: () => Promise.all([fetchUserFx(), getYourFeedFx(), getTagsFx()]),
});

export const intitNotAuthAppFx = createEffect({
  handler: () => Promise.all([getGlobalFeedFx(), getTagsFx()]),
});
