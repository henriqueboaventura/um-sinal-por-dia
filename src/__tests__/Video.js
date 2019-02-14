import React from 'react';
import { shallow } from 'enzyme';
import Video from '../components/Video';

it('renders message when there is no js', () => {
    const wrapper = shallow(<Video />);
    const message = <p>Para ver o video por favor habilite JavaScript e considere atualizar para um navegador que suporte <a href="http://videojs.com/html5-video-support/">Video HTML 5</a>.</p>;
    expect(wrapper.contains(message)).toEqual(true);
});

it('renders full video tag', () => {
    const wrapper = shallow(<Video url="test" />);
    const video = (
        <video key="test" autoPlay loop="loop" muted controls>
            <source src="test" />
            <p>Para ver o video por favor habilite JavaScript e considere atualizar para um navegador que suporte <a href="http://videojs.com/html5-video-support/">Video HTML 5</a>.</p>
        </video>
    )
    expect(wrapper.contains(video)).toBe(true);
});

it('renders video tag with url', () => {
    const wrapper = shallow(<Video url="test" />);
    expect(wrapper.find('video').childAt(0).type()).toEqual('source');
});