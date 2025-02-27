// Libs
import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

// Components
import Checkbox from '../../../../components/Checkbox';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

// Actions
import { sendFeedback } from '../../actions';

// Styles
import styles from './styles';

export const FeedbackSection: FC = () => {
  const dispatch = useDispatch();
  const [selectedCheckbox, setSelectedCheckbox] = useState(0);
  const [comment, setComment] = useState('');

  const onSelectCheckbox = (index: number) => setSelectedCheckbox(index);
  const isFormValid = comment && selectedCheckbox !== 0;

  const onFormSubmit = () => {
    let subject = '';

    switch (selectedCheckbox) {
      case 1:
        subject = 'Technical problem';
        break;
      case 2:
        subject = 'General feedback';
        break;
      case 3:
      default:
        subject = 'Other';
        break;
    }

    dispatch(sendFeedback({
      subject,
      comment,
    }))
  };

  return (
    <View>
      <Text style={styles.text}>
        If you have any suggestions or feedback for the app we would be grateful to hear from you. Please select from the menu below so we can best help you:
      </Text>
      <View style={styles.checkbox}>
        <Checkbox
          label="Technical problem"
          value={selectedCheckbox === 1}
          onChange={() => onSelectCheckbox(1)}
        />
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          label="General feedback"
          value={selectedCheckbox === 2}
          onChange={() => onSelectCheckbox(2)}
        />
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          label="Other"
          value={selectedCheckbox === 3}
          onChange={() => onSelectCheckbox(3)}
        />
      </View>
      <View style={styles.textarea}>
        <Input
          onChangeText={setComment}
          multiline
          numberOfLines={4}
          placeholder="Enter your comment..."
          value={comment}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title="Send"
          onPress={onFormSubmit}
          disabled={!isFormValid}
          primary
        />
      </View>
    </View>
  );
};

export default FeedbackSection;
