import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const ClassModel = types
  .model("Class")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Class extends Instance<typeof ClassModel> {}
export interface ClassSnapshotOut extends SnapshotOut<typeof ClassModel> {}
export interface ClassSnapshotIn extends SnapshotIn<typeof ClassModel> {}
export const createClassDefaultModel = () => types.optional(ClassModel, {})
