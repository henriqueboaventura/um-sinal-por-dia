import React from 'react';
import { shallow } from 'enzyme';
import Video from '.';

describe('Video', () => {
  const defaultProps = {
    className: 'testClassName',
    url: 'test'
  };

  it('renders message when there is no js', () => {
    const wrapper = shallow(<Video {...defaultProps} />);
    const message = <p>Para ver o video por favor habilite JavaScript e considere atualizar para um navegador que suporte <a href="http://videojs.com/html5-video-support/">Video HTML 5</a>.</p>;
    expect(wrapper.contains(message)).toBeTruthy();
  });

  it('sets video props', () => {
    const wrapper = shallow(<Video {...defaultProps} />);
    const video = wrapper.find('video');
    expect(video.exists()).toBeTruthy();
    expect(video.prop('autoPlay')).toBeTruthy();
    expect(video.prop('className')).toBe(`video ${defaultProps.className}`);
    expect(video.prop('controls')).toBeTruthy();
    expect(video.prop('loop')).toBe('loop');
    expect(video.prop('muted')).toBeTruthy();
  });

  it('sets source props', () => {
    const wrapper = shallow(<Video {...defaultProps} />);
    const source = wrapper.find('source');
    expect(source.prop('src')).toBe(defaultProps.url);
  });
});
