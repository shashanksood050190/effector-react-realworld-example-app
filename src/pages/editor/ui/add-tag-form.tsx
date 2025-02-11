import { useRef, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import * as article from 'entities/article';
import { uniq } from 'shared/library/uniq';
import { Form, List } from 'shared/ui';
import { Tag } from './tag';

export const AddTagForm: React.FC = () => {
  const { setValue, watch } = useFormContext();
  const ref = useRef<HTMLInputElement>(null);
  const tags = watch('tagList') as article.types.Article['tagList'];

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const tag = ref.current?.value;

    if (e.key === 'Enter' && tag) {
      setValue('tagList', uniq(tags.concat(tag)));
      ref.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleDeleteTag = useCallback(
    (tag: string) => {
      setValue(
        'tagList',
        tags.filter((x) => x !== tag),
      );
    },
    [setValue, tags],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control ref={ref} onKeyDown={handleAddTag} />
      <List>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onTagClick={handleDeleteTag}>
            {tag}
          </Tag>
        ))}
      </List>
    </Form>
  );
};
