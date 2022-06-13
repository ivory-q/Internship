import EToastTypes from '../types/enums/EToastTypes';

export const getToastType = (className: string, type: EToastTypes): string => {
  switch (type) {
    case EToastTypes.ALERT:
      return `${className}--alert`;
    case EToastTypes.WARNING:
      return `${className}--warning`;
    case EToastTypes.SUCCESS:
      return `${className}--success`;
  }
};
