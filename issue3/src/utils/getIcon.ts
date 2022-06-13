import IconDraft from '@assets/icons/draft.svg';
import IconProcessing from '@assets/icons/processing.svg';
import IconSuccess from '@assets/icons/success.svg';
import EStatuses from '../types/enums/EStatuses';

export default function getIcon(status: EStatuses) {
  switch (status) {
    case EStatuses.DRAFT:
      return IconDraft;
    case EStatuses.PROCESSING:
      return IconProcessing;
    case EStatuses.SUCCESS:
      return IconSuccess;
  }
}
