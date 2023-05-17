import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';
import storage from 'redux-persist/lib/storage';
 
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { getDefaultNormalizer } from "@testing-library/react";
import userSlice from './user'
const reducers=combineReducers({
    user:userSlice
})

const persistConfig={
    key:"root",
    storage,
    stateReconciler:autoMergeLevel2
}
const customizedMiddleware=getDefaultMiddleware({
    serializableCheck:false
})

const persistedReducer=persistReducer(persistConfig,reducers)

export const store= configureStore({
    reducer:persistedReducer,
    middleware:customizedMiddleware
})